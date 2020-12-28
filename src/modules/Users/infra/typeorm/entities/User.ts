import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity('users')
export default  class User{
   @PrimaryGeneratedColumn('uuid')
   id:string

   @Column("character varying")
   name:string

   @Column("character varying")
   password:string

   @Column("character varying")
   email:string

   @Column('timestamp')
   verifiedEmail:Date
}

