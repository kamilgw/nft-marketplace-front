// @ts-ignore
import styles from './nftLike.module.scss';
import { HeartFilled, HeartOutlined } from '@ant-design/icons';
import React, { useCallback, useState, SyntheticEvent, useEffect } from 'react';
import { useChangeFavouriteStateMutation } from 'generated/graphql';
import { Modal } from 'antd';

export interface NftLikeProps {
  initialState?: boolean;
  nftId: string;
}

export const NftLike: React.FC<NftLikeProps> = props => {
  const [favouriteState, setFavouriteState] = useState(props.initialState);
  const [changeFavouriteState] = useChangeFavouriteStateMutation();

  useEffect(() => {
    if (props.initialState) {
      setFavouriteState(true);
    }
  }, [props.initialState]);

  const changeNftFavouriteState = useCallback(
    async (event: SyntheticEvent) => {
      event.stopPropagation();
      setFavouriteState(!favouriteState);
      const result = await changeFavouriteState({
        variables: {
          like: !favouriteState,
          nftId: props.nftId,
        },
      });
      switch (result.data?.changeFavouriteState) {
        case 'Liked':
          return;
        case 'Unliked':
          return;
        case 'False':
          Modal.error({ title: 'You are not logged in.' });
          setFavouriteState(favouriteState);
          return;
      }
    },
    [changeFavouriteState, favouriteState, props.nftId],
  );

  return (
    <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
      {favouriteState ? (
        <HeartFilled onClick={changeNftFavouriteState} className={styles.liked} />
      ) : (
        <HeartOutlined onClick={changeNftFavouriteState} className={styles.basic} />
      )}
    </div>
  );
};
