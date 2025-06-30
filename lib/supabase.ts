import 'react-native-url-polyfill/auto';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "https://xjnsgvphqpyqwtfpjnsg.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhqbnNndnBocXB5cXd0ZnBqbnNnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTEyODYzMzIsImV4cCI6MjA2Njg2MjMzMn0.gDxlHUWTs9lJmWK10hdBFItdtXzcv0u8iBinWqJPtfE";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
