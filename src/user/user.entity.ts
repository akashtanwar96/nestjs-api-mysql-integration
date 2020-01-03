import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    uid: number;

    @Column({ length: 25 })
    firstName:string;

    @Column({ length: 25 })
    lastName:string;

    @Column() 
    isActive:boolean;

    @Column() 
    email:string;

    @Column() 
    address:string;

  
}