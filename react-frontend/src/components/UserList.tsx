import type { User } from "../interfaces/user.interface";
import { UserCard } from "./UserCard";

export function UserList({
        users, 
        loading, 
        error,
        onDelete 
    }: {
        users: User[], 
        loading: boolean, 
        error: string | null, 
        onDelete: (id: string) => void 
    }) {
    return (
        <div className="users-container">
            {loading ? (
                <span className="spinner" />
            ) : error ? (
                <p className="error">{error}</p>
            ) : users.length === 0 ? (
                <p className="empty">Aucun utilisateur</p>
            ) : (
                users.map((user) => (
                    <UserCard key={user._id} user={user} onDelete={() => onDelete(user._id)} />
                ))
            )}
        </div>
    )
}