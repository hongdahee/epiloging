import {useEffect, useState} from 'react';
import {Header} from '../component/common/Header';
import * as S from './style';
import {FlatList} from 'react-native';
import {getStorageContents} from '../../model/storageModel';
import {useNavigation} from '@react-navigation/native';

const TabItem = ({
  img,
  title,
  id,
  isbn,
  item,
}: {
  img: string;
  title: string;
  id?: string;
  isbn?: string;
  item: any;
}) => {
  const navigation = useNavigation<any>();

  return (
    <S.Contents
      onPress={() => navigation.navigate('Note', {item})}
      style={{shadowColor: 'rgba(142, 142, 142, 0.3)'}}>
      <S.ContentsImg source={{uri: img}} />
      <S.ContentsInfo>
        <S.InfoTitle>{title}</S.InfoTitle>
        <S.MainInfo>
          {item.creator} | {item.isbn ? item.publisher : item.country}
        </S.MainInfo>
      </S.ContentsInfo>
    </S.Contents>
  );
};
export const Storage = () => {
  const [selectedTab, setSelectedTab] = useState('책');
  const [bookData, setBookData] = useState<any>([]);
  const [movieData, setMovieData] = useState<any>([]);

  const selectTab = (tab: string) => {
    setSelectedTab(tab);
  };

  useEffect(() => {
    getStorageContents('ebMjDFr0AZKxEeEQdlTvk')
      .then(data => {
        console.log(data);
        setBookData(
          data?.storage[0]?.contents?.filter((data: any) => data.isbn),
        );
        setMovieData(
          data?.storage[0]?.contents?.filter((data: any) => data.id),
        );
      })
      .catch(e => {
        console.log(e);
      });
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
            {selectedTab === '책' ? bookData?.length : movieData?.length}
            {selectedTab === '책' ? '권' : '편'}
          </S.StorageCount>
        </S.StorageInfo>
        <S.StorageMain>
          <FlatList
            showsVerticalScrollIndicator={false}
            style={{marginTop: '2.5%'}}
            numColumns={3}
            data={selectedTab === '책' ? bookData : movieData}
            renderItem={({item}) => (
              <TabItem
                key={item.id || item.isbn}
                id={item.id}
                isbn={item.isbn}
                title={item.title}
                img={
                  item.isbn
                    ? item.img
                    : `https://image.tmdb.org/t/p/w500${item.img}`
                }
                item={item}
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
