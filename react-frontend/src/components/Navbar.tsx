export function Navbar({ userCount }: { userCount: number }) {
 return (
    <div className="nav">
        <h1>Gestion des utilisateurs</h1>
        <p>Nombre d'utilisateurs : {userCount}</p>
    </div>
 )
}