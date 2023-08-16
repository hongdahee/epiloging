import {Image, Text, TouchableOpacity, View, Dimensions} from 'react-native';
import {Calendar, LocaleConfig} from 'react-native-calendars';
import * as S from './style';
import {Header} from '../common/Header';
import {useEffect, useState} from 'react';
import {getCalendarEvents} from '../../model/calendarModel';
import {IEvents} from '../../types/calendar';
import {Platform} from 'react-native';

const {width, height} = Dimensions.get('window');

LocaleConfig.locales.kr = {
  monthNames: [
    '1월',
    '2월',
    '3월',
    '4월',
    '5월',
    '6월',
    '7월',
    '8월',
    '9월',
    '10월',
    '11월',
    '12월',
  ],
  monthNamesShort: [
    '1월',
    '2월',
    '3월',
    '4월',
    '5월',
    '6월',
    '7월',
    '8월',
    '9월',
    '10월',
    '11월',
    '12월',
  ],
  dayNames: ['일', '월', '화', '수', '목', '금', '토'],
  dayNamesShort: ['일', '월', '화', '수', '목', '금', '토'],
};
LocaleConfig.defaultLocale = 'kr';

export const CalendarScreen = () => {
  const [events, setEvents] = useState<IEvents[]>([]);

  useEffect(() => {
    getCalendarEvents('ebMjDFr0AZKxEeEQdlTvk').then(data => setEvents(data));
  }, []);

  let event;

  const checkEvent = (date: string) => {
    event = events.filter(e => e.date === date);
    return event;
  };

  return (
    <>
      <Header
        title="나의 캘린더"
        backBtn={true}
        rightBtn={require('../../assets/save.png')}
      />
      <S.CalendarContainer>
        <Calendar
          monthFormat="yyyy년 MMM"
          theme={{
            textMonthFontSize: 16,
            textMonthFontWeight: '600',
            monthTextColor: '#000',
            textSectionTitleColor: '#000',
          }}
          style={{
            borderRadius: 30,
            borderWidth: 0.5,
            borderColor: 'rgba(114, 114, 114, 0.5)',
            overflow: 'hidden',
            // ...Platform.select({
            //   ios: {
            //     borderWidth: 0.5,
            //     borderColor: 'rgba(114, 114, 114, 0.5)',
            //     overflow: 'hidden',
            //   },
            //   android: {
            //     overflow: 'hidden',
            //     elevation: 2,
            //   },
            // }),
          }}
          hideExtraDays={true}
          onDayPress={day => {
            console.log('selected', day);
          }}
          renderArrow={direction =>
            direction === 'left' ? (
              <Image
                style={{width: 8, height: 13}}
                source={require('../../assets/left.png')}
              />
            ) : (
              <Image
                style={{width: 8, height: 13}}
                source={require('../../assets/right.png')}
              />
            )
          }
          dayComponent={({date, state}) => {
            return (
              <TouchableOpacity
                style={{
                  alignItems: 'center',
                  // backgroundColor: 'blue',
                  width: Math.floor(width / 8.8),
                  maxHeight: Math.floor(height / 11),
                  marginBottom: '3%',
                }}>
                {state === 'today' ? (
                  <View
                    style={{
                      backgroundColor: 'black',
                      borderRadius: 100,
                      width: 15,
                      height: 15,
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <Text
                      style={{
                        textAlign: 'center',
                        fontSize: 10,
                        color: 'white',
                      }}>
                      {date?.day}
                    </Text>
                  </View>
                ) : (
                  <Text
                    style={{
                      textAlign: 'center',
                      fontSize: 10,
                      color: '#696969',
                    }}>
                    {date?.day}
                  </Text>
                )}
                {checkEvent(date!.dateString).length > 0 ? (
                  <View
                    key={date?.dateString}
                    style={{
                      width: '75%',
                      maxHeight: '100%',
                      justifyContent: 'center',
                      alignItems: 'center',
                      paddingTop: '5%',
                      paddingBottom: '5%',
                      ...Platform.select({
                        ios: {
                          shadowColor: '#C5C5C5',
                          shadowOffset: {
                            width: 1,
                            height: 1,
                          },
                          shadowOpacity: 2,
                        },
                        android: {
                          elevation: 2,
                        },
                      }),
                    }}>
                    <Image
                      source={{
                        uri: event![0].isbn
                          ? event![0].img
                          : `https://image.tmdb.org/t/p/w500${event![0].img}`,
                      }}
                      style={{
                        objectFit: 'cover',
                        width: '100%',
                        height: '100%',
                        borderRadius: 7,
                      }}
                    />
                  </View>
                ) : (
                  <View style={{width: '75%', height: '100%'}} />
                )}
              </TouchableOpacity>
            );
          }}
        />
      </S.CalendarContainer>
    </>
  );
};
