import type { User } from "../interfaces/user.interface";

export function UserCard({ user, onDelete }: { user: User, onDelete: () => void }) {
 return (
    <div className="user-card">
        <h2>{user.name}</h2>
        <ul>
            <li className={user.role}>{user.role}</li>
            <li>{user.email}</li>
            <li>{new Date(user.createdAt).toLocaleDateString('fr-FR')}</li>
        </ul>
        <button onClick={() => {
            if (confirm("Supprimer cet utilisateur ?")) {
                onDelete();
            }
        }}>
            Delete
        </button>
    </div>
 )
}