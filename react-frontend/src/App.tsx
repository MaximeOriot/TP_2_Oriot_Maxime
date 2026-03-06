import { useEffect, useState } from 'react'
import './App.css'
import { Navbar } from './components/Navbar'
import { UserService } from './services/userService';
import type { RoleType, User } from './interfaces/user.interface';
import { UserList } from './components/UserList';
import { UserForm } from './components/UserForm';

function App() {
  const userService = new UserService();
  const [ userCount, setUserCount ] = useState(0);
  const [ users, setUsers ] = useState<User[]>([]);
  const [ onLoading, setOnLoading ] = useState<boolean>(false);
  const [ error, setError ] = useState<string | null>(null)

  const loadUsers = async () => {
      setOnLoading(true);
      const users: User[] = (await userService.getAll()).data;
      setOnLoading(false);
      setUsers(users);
      setUserCount(users.length);
    }

  useEffect(() => {
    loadUsers();
  }, [])

  async function deleteUser(id: string) {
    setOnLoading(true);
    try {
      await userService.revome(id);
    } catch (error) {
      setError(`Erreur lors de la suppression`);
    }
    setOnLoading(false);
    const newUsers = users.filter(user => user._id !== id);
    setUsers(newUsers);
  }

  async function createUser(name: string, email: string, role: RoleType) {
    console.log(name, email, role);
    try {
      setOnLoading(true);
      await userService.create({ name, email, role });
    } catch (error) {
      setError(`Erreur lors de la création`);
    }
    loadUsers();
  }

  return (
    <>
      <Navbar userCount={userCount}></Navbar>
      <hr/>
      <UserList 
        users={users} 
        loading={onLoading} 
        error={error} 
        onDelete={(id: string) => deleteUser(id)}
        ></UserList>
        <hr/>
        <UserForm 
          onCreate={(
            name: string, 
            email: string, 
            role: RoleType
          ) => createUser(name, email, role)}
        ></UserForm>
    </>
  )
}

export default App
