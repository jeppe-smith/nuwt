import { Injectable } from '@nestjs/common'
import { User, UserDTO } from './user.entity'
import { UserRepository } from './user.repository'

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  findAll(): Promise<User[]> {
    return this.userRepository.find()
  }

  findById(id: string): Promise<User> {
    return this.userRepository.findOneOrFail(id)
  }

  findByEmail(email: string): Promise<User> {
    return this.userRepository.findOneOrFail({ email })
  }

  async create(data: UserDTO): Promise<User> {
    try {
      const user = this.userRepository.create(data)

      return this.userRepository.save(user)
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

  async delete(id: string): Promise<boolean> {
    try {
      const { affected } = await this.userRepository.delete(id)

      return affected > 0
    } catch (error) {
      throw error
    }
  }
}
