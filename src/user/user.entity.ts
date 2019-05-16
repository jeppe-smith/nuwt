import { Entity, PrimaryGeneratedColumn, Column, BeforeInsert } from 'typeorm'
import { hash } from 'bcrypt'

export interface UserDTO {
  email: string
  name: string
  password: string
}

export interface UserRO {
  id: string
  email: string
  name: string
}

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({ unique: true })
  email: string

  @Column()
  name: string

  @Column()
  password: string

  @BeforeInsert()
  async beforeInsert() {
    try {
      await this.hashPassword()
    } catch (error) {
      throw error
    }
  }

  /**
   * Hashes the current password.
   */
  async hashPassword() {
    try {
      this.password = await hash(this.password, 11)
    } catch (error) {
      throw error
    }
  }

  /**
   * Get the response object.
   */
  toReponseObject(): UserRO {
    const { id, email, name } = this

    return {
      id,
      email,
      name,
    }
  }
}
