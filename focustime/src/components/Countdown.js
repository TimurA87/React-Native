import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';

import { fontSizes, spacing } from '../utils/sizes';
import { colors } from '../utils/colors';

const minutesToMillis = (min) => min * 1000 * 60;
const formaTime = (time) => (time < 10 ? `0${time}` : time);

export const Countdown = ({ minutes = 20, isPaused, onProgress, onEnd }) => {
  const [millis, setMillis] = useState(null);

  const minute = Math.floor(millis / 1000 / 60) % 60;
  const seconds = Math.floor(millis / 1000) % 60;

  const countDown = () => {
    setMillis((time) => {
      if (time === 0) {
        clearInterval(interval.current);
      } else {
        const timeLeft = time - 1000;
        return timeLeft;
      }
    });
  };

  useEffect(() => {
    onProgress(millis / minutesToMillis(minutes));
    if (millis === 0) {
      onEnd();
    }
  }, [millis]);

  useEffect(() => {
    setMillis(minutesToMillis(minutes));
  }, [minutes]);

  const interval = React.useRef(null);
  useEffect(() => {
    if (isPaused) {
      if (interval.current) clearInterval(interval.current);
      return;
    }

    interval.current = setInterval(countDown, 1000);
    return () => clearInterval(interval.current);
  }, [isPaused]);

  return (
    <View>
      <Text style={styles.text}>
        {formaTime(minute)}:{formaTime(seconds)}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: fontSizes.xxxl,
    fontWeight: 'bold',
    padding: spacing.lg,
    backgroundColor: 'rgba(94, 132, 226, 0.3)',
    color: colors.white,
  },
});
