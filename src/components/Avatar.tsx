import { ImgHTMLAttributes } from 'react';
import styles from './Avatar.module.css';

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
  hasBorder?: boolean;
}
// spread operator "props" -> serve para pegar cada valor existente na props do Componente e passar como propriedade para a Image
export function Avatar({ hasBorder = true, ...props }: AvatarProps) {
  return (
    <img
      className={hasBorder ? styles.avatarWithBorder : styles.avatar}
      {...props}
    // Agora qnd eu utilizo alguma propriedade nova no Componente <Avatar />, isso eh automaticamente passado para o img.
    />
  )
}