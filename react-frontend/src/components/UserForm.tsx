import { useState } from "react";
import type { RoleType } from "../interfaces/user.interface";

export function UserForm({ onCreate }: { onCreate: (name: string, email: string, role: RoleType) => void }) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [role, setRole] = useState<RoleType>("user");

    function handleSubmit() {
        if (!name.trim() || !email.trim()) return;
        onCreate(name, email, role);
        setName("");
        setEmail("");
        setRole("user");
    }

    return (
        <div className="user-form">
            <input
                type="text"
                placeholder="Nom"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <select value={role} onChange={(e) => setRole(e.target.value as RoleType)}>
                <option value="user">User</option>
                <option value="admin">Admin</option>
            </select>
            {name !== '' && email !== '' &&(
                <button onClick={handleSubmit}>Créer</button>
            )}
        </div>
    )
}