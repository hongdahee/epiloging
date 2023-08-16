import {useEffect, useState} from 'react';
import {Header} from '../common/Header';
import * as S from './style';
import {FlatList} from 'react-native';
import {getStorageContents} from '../../model/storageModel';
import {useNavigation} from '@react-navigation/native';

const TabItem = ({
  img,
  title,
  id,
  isbn,
}: {
  img: string;
  title: string;
  id?: string;
  isbn?: string;
}) => {
  const navigation = useNavigation<any>();

  return (
    <S.Contents
      onPress={() => navigation.navigate('Note', {id, isbn})}
      style={{shadowColor: 'rgba(142, 142, 142, 0.3)'}}>
      <S.ContentsImg source={{uri: img}} />
      <S.ContentsInfo>
        <S.InfoTitle>{title}</S.InfoTitle>
      </S.ContentsInfo>
    </S.Contents>
  );
};
export const Storage = () => {
  const [selectedTab, setSelectedTab] = useState('책');
  const [storageData, setStorageData] = useState<any>([]);

  const selectTab = (tab: string) => {
    setSelectedTab(tab);
  };

  useEffect(() => {
    getStorageContents('ebMjDFr0AZKxEeEQdlTvk').then(data =>
      setStorageData(data.storage[0].contents),
    );
  }, []);

  return (
    <>
      <Header
        title={'나의 보관함'}
        rightBtn={require('../../assets/calendar.png')}
      />
      <S.StorageContainer>
        <S.Tab>
          <S.TabItem
            active={selectedTab === '책'}
            onPress={() => selectTab('책')}>
            <S.TabItemTitle>책</S.TabItemTitle>
          </S.TabItem>
          <S.TabItem
            active={selectedTab === '영화'}
            onPress={() => selectTab('영화')}>
            <S.TabItemTitle>영화</S.TabItemTitle>
          </S.TabItem>
        </S.Tab>
        <S.StorageInfo>
          <S.StorageCount>
            {storageData.length}
            {selectedTab === '책' ? '권' : '편'}
          </S.StorageCount>
        </S.StorageInfo>
        <S.StorageMain>
          <FlatList
            showsVerticalScrollIndicator={false}
            style={{marginTop: '2.5%'}}
            numColumns={3}
            data={
              selectedTab === '책'
                ? storageData.filter((data: any) => data.isbn)
                : storageData.filter((data: any) => data.id)
            }
            renderItem={({item}) => (
              <TabItem
                id={item.id}
                isbn={item.isbn}
                title={item.title}
                img={
                  item.isbn
                    ? item.img
                    : `https://image.tmdb.org/t/p/w500${item.img}`
                }
              />
            )}
            keyExtractor={(item, index) => String(index)}
            columnWrapperStyle={{
              paddingHorizontal: '5%',
              paddingVertical: '2.5%',
            }}
          />
        </S.StorageMain>
      </S.StorageContainer>
    </>
  );
};
