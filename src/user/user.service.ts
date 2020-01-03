import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UserService {
    users = [{ name: 'akash', type: 'admin', id: 1 },
    { name: 'santosh', type: 'admin', id: 2 },{ name: 'negi', type: 'user', id: 3}];

    constructor(@InjectRepository(User) private usersRepository: Repository<User>) {}
    getSomething() {
        return 'red';
    }

    abcgetUsers() {
        return this.users;
    }

    addUser(userName: string, userType: string, userId: number) {
        this.users.push({name: userName, type: userType, id: userId});
        console.log(this.users);
    }

    removeUser(id: number) {
        this.users.forEach((v, index : number)=> {
            if(v.id == id) {
                this.users.splice(index,1)
            }
        });
        console.log(this.users,'users delete hua ki nhi');
        

    }

    
    async getUsers(user: User): Promise<User[]> {
        return await this.usersRepository.find();
    }

    async getUser(_id: number): Promise<User[]> {
        return await this.usersRepository.find({
            select: ["firstName",  "isActive"],
            where: [{ "id": _id }]
        });
    }

    async updateUser(user: User) {
        this.usersRepository.save(user)
    }

    async deleteUser(user: User) {
        this.usersRepository.delete(user);
    }

    async createUser(user: User) {
        console.log(user,'body ka pata karte h');
        this.usersRepository.create(user);
    }
}

