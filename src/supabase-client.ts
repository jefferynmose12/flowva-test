import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  "https://xfeebhukjgqmpnkbxpjy.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhmZWViaHVramdxbXBua2J4cGp5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjYxNzUwNDAsImV4cCI6MjA4MTc1MTA0MH0.-n7Icesed4CCvxrg9G_2zyDEad1_J4PT4dEbui9Nsj4"
);
