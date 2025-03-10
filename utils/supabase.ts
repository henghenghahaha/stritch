import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://vrjmzowfkgulzelgonsy.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZyam16b3dma2d1bHplbGdvbnN5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDE1Nzk5MjEsImV4cCI6MjA1NzE1NTkyMX0.mbWT5FDC82G4t7XCP38d5AwLG6V391xXA3CvHtgu0cA";

export const supabase = createClient(supabaseUrl, supabaseKey);
