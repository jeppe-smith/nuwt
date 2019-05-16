import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { User, UserDTO } from './user.entity'

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  findAll(): Promise<User[]> {
    return this.userRepository.find()
  }

  findById(id: string): Promise<User> {
    return this.userRepository.findOneOrFail(id)
  }

  findByEmail(email: string): Promise<User> {
    return this.userRepository.findOne({ email })
  }

  async create(data: UserDTO): Promise<User> {
    try {
      const { id } = await this.userRepository.save(data)

      return this.findById(id)
    } catch (error) {
      throw error
    }
  }

  async update(id: string, data: Partial<UserDTO>): Promise<User> {
    try {
      await this.userRepository.save({ id, ...data })

      return this.findById(id)
    } catch (error) {
      throw error
    }
  }

  async delete(id: string) {
    try {
      const { affected } = await this.userRepository.delete(id)

      return affected > 0
    } catch (error) {
      throw error
    }
  }
}
