import { AbstractEntity } from 'src/common/entities';
import { UserEntity } from 'src/user/entities';
import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';
import { DeptAmountEntity } from './dept-amount.entity';

@Entity({ name: 'dept' })
export class DeptEntity extends AbstractEntity {
  @ManyToOne(() => UserEntity)
  public person1: UserEntity;

  @ManyToOne(() => UserEntity)
  public person2: UserEntity;

  @Column()
  public isPerson1Dept: boolean;

  @OneToMany(() => DeptAmountEntity, (deptAmount) => deptAmount.item)
  public amounts: DeptAmountEntity[];
}
