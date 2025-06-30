import { Injectable } from '@angular/core';
import { supabase } from './supabase.client';

@Injectable({ providedIn: 'root' })
export class SupabaseService {
    constructor() { }

    async uploadFile(file: File) {
        const filePath = `public/${Date.now()}_${file.name}`;

        const { data, error } = await supabase
            .storage
            .from('buildesk-documents')
            .upload(filePath, file, {
                cacheControl: '3600',
            });

        if (error) {
            console.error('Upload error:', error.message);
            return null;
        }

        // // ✅ Correct getPublicUrl usage in v1
        // const publicUrl = supabase
        //     .storage
        //     .from('buildesk-documents')
        //     .select(filePath)
        //     .publicURL;

        const publicUrl = await supabase
            .from('buildesk-documents')
            .select(filePath)

        console.log('✅ Public URL:', publicUrl);
        return publicUrl;
    }
}
