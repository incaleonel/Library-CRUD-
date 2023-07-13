import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, BaseEntity } from "typeorm"

@Entity({name:"history"})
export class Log extends BaseEntity { 
    @PrimaryGeneratedColumn()
    id_history: number
    
    @Column()
    isbn: string

    @Column()
    title: string

    @Column()
    author: string

    @Column()
    year_of_publication: number

    @Column({nullable: true })
    summary: string
    @CreateDateColumn()
    lastModified: Date;
}