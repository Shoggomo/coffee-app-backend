import { AbstractEntity } from 'src/common/entities';
import { Column, Entity, OneToMany } from 'typeorm';
import { DeptAmountEntity } from '.';

@Entity({ name: 'dept-items' })
export class DeptItemEntity extends AbstractEntity {
  @Column({ unique: true })
  public name: string;

  @Column()
  public value: number;

  @OneToMany(() => DeptAmountEntity, (deptAmount) => deptAmount.item)
  public amounts: DeptAmountEntity[];
}
