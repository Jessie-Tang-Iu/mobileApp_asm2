import { supabase } from "./supabase";
import { User } from "./object_types";

const table_name = 'user_details';

export async function getAllUsers() {
    const { data, error } = await supabase
        .from(table_name)
        .select('*')
        .order('first_name', {ascending: true});
    
    if (error) {
        console.error('Error fetching users: ', error);
        throw error;
    }
    return data;
}

export async function getUserById(user_id: string) {
    const { data, error } = await supabase
        .from(table_name)
        .select('*')
        .eq('user_id', user_id)
        .single();
    
    if (error) {
        console.error(`Error fetching user with ID ${user_id}: `, error);
        throw error;
    }
    return data;
}

export async function addUser(user: User) {
    const { data, error } = await supabase
        .from(table_name)
        .insert([user]);

    if (error) {
        console.error("Error adding user: ", error);
        throw error;
    }
    return data;
}

export async function updateUser(user_id: string, user: User) {
    const { data, error } = await supabase
        .from(table_name)
        .update(user)
        .eq("user_id", user_id);

    if (error) {
        console.error(`Error updating user with ID ${user_id}: `, error);
        throw error;
    }
    return data;
}

export async function deleteUser(user_id: string) {
    const { data, error } = await supabase
        .from(table_name)
        .delete()
        .eq("user_id", user_id);

    if (error) {
        console.error(`Error deleting user with ID ${user_id}: `, error);
        throw error;
    }
    return data;
}