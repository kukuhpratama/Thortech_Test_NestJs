import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UpdateResult, DeleteResult } from 'typeorm';
import { User } from './user.entity';


@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>,
    ) { }

    async  findAll(): Promise<User[]> {
        return await this.userRepository.find();
    }

    async  findAll_new(): Promise<User[]> {
        return await this.userRepository.find();
    }

    async  findOne(id): Promise<User> {
        return await this.userRepository.findOne(id);
    }

    async  create(user: User): Promise<User> {
        return await this.userRepository.save(user);
    }

    async update(user: User): Promise<UpdateResult> {
        return await this.userRepository.update(user.id, user);
    }

    async delete(id): Promise<DeleteResult> {
        return await this.userRepository.delete(id);
    }
}


