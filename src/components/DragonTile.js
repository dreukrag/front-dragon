import React from "react";
import styles from "./DragonTile.module.scss";
import { GetBorderColorFromDragonColor } from "Utils";
import styled from "styled-components";
const Tile = styled.div`
  background-image: url(${(props) => props.image});
  border-color: ${(props) => GetBorderColorFromDragonColor(props.type)};
  color: ${(props) => GetBorderColorFromDragonColor(props.type)};
  background-color: ${(props) => GetBorderColorFromDragonColor(props.type)};
  &:hover {
    box-shadow: 0px 0px 4px 6px
      ${(props) => GetBorderColorFromDragonColor(props.type)};
  }
`;

const DragonTile = ({ id, name, type, image, ...rest }) => (
  <Tile image={image} type={type} className={styles.tile} key={id} {...rest}>
    <p>{name}</p>
  </Tile>
);

export default DragonTile;
