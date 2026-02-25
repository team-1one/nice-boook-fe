export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.1"
  }
  graphql_public: {
    Tables: {
      [_ in never]: never
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      graphql: {
        Args: {
          extensions?: Json
          operationName?: string
          query?: string
          variables?: Json
        }
        Returns: Json
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
  public: {
    Tables: {
      audiobook: {
        Row: {
          book_id: string
          listening_length: number | null
          narrator: string | null
        }
        Insert: {
          book_id: string
          listening_length?: number | null
          narrator?: string | null
        }
        Update: {
          book_id?: string
          listening_length?: number | null
          narrator?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "audiobook_details_book_id_fkey"
            columns: ["book_id"]
            isOneToOne: true
            referencedRelation: "books"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "audiobook_details_book_id_fkey"
            columns: ["book_id"]
            isOneToOne: true
            referencedRelation: "books_flat"
            referencedColumns: ["id"]
          },
        ]
      }
      banners: {
        Row: {
          created_at: string
          id: string
          image_desktop_url: string | null
          image_mobile_url: string
          image_tablet_url: string | null
          target_url: string | null
          title: string | null
        }
        Insert: {
          created_at?: string
          id?: string
          image_desktop_url?: string | null
          image_mobile_url: string
          image_tablet_url?: string | null
          target_url?: string | null
          title?: string | null
        }
        Update: {
          created_at?: string
          id?: string
          image_desktop_url?: string | null
          image_mobile_url?: string
          image_tablet_url?: string | null
          target_url?: string | null
          title?: string | null
        }
        Relationships: []
      }
      book_categories: {
        Row: {
          book_id: string
          category_id: number
        }
        Insert: {
          book_id: string
          category_id: number
        }
        Update: {
          book_id?: string
          category_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "book_categories_book_id_fkey"
            columns: ["book_id"]
            isOneToOne: false
            referencedRelation: "books"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "book_categories_book_id_fkey"
            columns: ["book_id"]
            isOneToOne: false
            referencedRelation: "books_flat"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "book_categories_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "categories"
            referencedColumns: ["id"]
          },
        ]
      }
      books: {
        Row: {
          author: string
          created_at: string
          description: string[]
          effective_price: number | null
          id: string
          images: string[]
          lang: Database["public"]["Enums"]["book_lang"]
          lang_available: Database["public"]["Enums"]["book_lang"][]
          name: string
          namespace_id: string
          price_discount: number | null
          price_regular: number
          publication: string | null
          publication_year: number | null
          slug: string
          source_id: string | null
          type: Database["public"]["Enums"]["book_type"]
          updated_at: string
        }
        Insert: {
          author: string
          created_at?: string
          description?: string[]
          effective_price?: number | null
          id?: string
          images?: string[]
          lang: Database["public"]["Enums"]["book_lang"]
          lang_available?: Database["public"]["Enums"]["book_lang"][]
          name: string
          namespace_id: string
          price_discount?: number | null
          price_regular: number
          publication?: string | null
          publication_year?: number | null
          slug: string
          source_id?: string | null
          type: Database["public"]["Enums"]["book_type"]
          updated_at?: string
        }
        Update: {
          author?: string
          created_at?: string
          description?: string[]
          effective_price?: number | null
          id?: string
          images?: string[]
          lang?: Database["public"]["Enums"]["book_lang"]
          lang_available?: Database["public"]["Enums"]["book_lang"][]
          name?: string
          namespace_id?: string
          price_discount?: number | null
          price_regular?: number
          publication?: string | null
          publication_year?: number | null
          slug?: string
          source_id?: string | null
          type?: Database["public"]["Enums"]["book_type"]
          updated_at?: string
        }
        Relationships: []
      }
      categories: {
        Row: {
          id: number
          name: string
        }
        Insert: {
          id?: number
          name: string
        }
        Update: {
          id?: number
          name?: string
        }
        Relationships: []
      }
      contacts: {
        Row: {
          avatar_url: string | null
          contributions: string[] | null
          created_at: string
          github: string | null
          id: number
          linkedin: string | null
          name: string
          role: string | null
          surname: string
          tagline: string | null
        }
        Insert: {
          avatar_url?: string | null
          contributions?: string[] | null
          created_at?: string
          github?: string | null
          id?: number
          linkedin?: string | null
          name: string
          role?: string | null
          surname: string
          tagline?: string | null
        }
        Update: {
          avatar_url?: string | null
          contributions?: string[] | null
          created_at?: string
          github?: string | null
          id?: number
          linkedin?: string | null
          name?: string
          role?: string | null
          surname?: string
          tagline?: string | null
        }
        Relationships: []
      }
      readable_book: {
        Row: {
          book_id: string
          cover_type: string | null
          format: string | null
          illustrations: boolean
          number_of_pages: number | null
        }
        Insert: {
          book_id: string
          cover_type?: string | null
          format?: string | null
          illustrations?: boolean
          number_of_pages?: number | null
        }
        Update: {
          book_id?: string
          cover_type?: string | null
          format?: string | null
          illustrations?: boolean
          number_of_pages?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "physical_book_details_book_id_fkey"
            columns: ["book_id"]
            isOneToOne: true
            referencedRelation: "books"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "physical_book_details_book_id_fkey"
            columns: ["book_id"]
            isOneToOne: true
            referencedRelation: "books_flat"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "readable_book_book_id_fkey"
            columns: ["book_id"]
            isOneToOne: true
            referencedRelation: "books"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "readable_book_book_id_fkey"
            columns: ["book_id"]
            isOneToOne: true
            referencedRelation: "books_flat"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      books_flat: {
        Row: {
          author: string | null
          categories: string[] | null
          cover_type: string | null
          created_at: string | null
          description: string[] | null
          effective_price: number | null
          format: string | null
          id: string | null
          illustrations: boolean | null
          images: string[] | null
          lang: Database["public"]["Enums"]["book_lang"] | null
          lang_available: Database["public"]["Enums"]["book_lang"][] | null
          listening_length: number | null
          name: string | null
          namespace_id: string | null
          narrator: string | null
          number_of_pages: number | null
          price_discount: number | null
          price_regular: number | null
          publication: string | null
          publication_year: number | null
          slug: string | null
          source_id: string | null
          type: Database["public"]["Enums"]["book_type"] | null
          updated_at: string | null
        }
        Relationships: []
      }
    }
    Functions: {
      get_random_books: {
        Args: { limit_count: number }
        Returns: {
          author: string | null
          categories: string[] | null
          cover_type: string | null
          created_at: string | null
          description: string[] | null
          effective_price: number | null
          format: string | null
          id: string | null
          illustrations: boolean | null
          images: string[] | null
          lang: Database["public"]["Enums"]["book_lang"] | null
          lang_available: Database["public"]["Enums"]["book_lang"][] | null
          listening_length: number | null
          name: string | null
          namespace_id: string | null
          narrator: string | null
          number_of_pages: number | null
          price_discount: number | null
          price_regular: number | null
          publication: string | null
          publication_year: number | null
          slug: string | null
          source_id: string | null
          type: Database["public"]["Enums"]["book_type"] | null
          updated_at: string | null
        }[]
        SetofOptions: {
          from: "*"
          to: "books_flat"
          isOneToOne: false
          isSetofReturn: true
        }
      }
      show_limit: { Args: never; Returns: number }
      show_trgm: { Args: { "": string }; Returns: string[] }
      storage_public_url: {
        Args: { p_bucket: string; p_path: string }
        Returns: string
      }
    }
    Enums: {
      book_lang: "en" | "uk"
      book_type: "audiobook" | "kindle" | "paperback"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  graphql_public: {
    Enums: {},
  },
  public: {
    Enums: {
      book_lang: ["en", "uk"],
      book_type: ["audiobook", "kindle", "paperback"],
    },
  },
} as const
