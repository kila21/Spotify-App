import { useEffect, useState } from "react";
import { getTrackFeatures } from "../../../Api/Api";
import styled from "styled-components";

interface TrackFeaturesDataType {
  duration: number;
  key: number;
  modality: number;
  time_signature: number;
  segments: number;
  beats: number;
  bars: number;
  sections: number;
  tempo: number;
}

export const TrackFeatures = (props: {
  id: string;
  popularity: number | undefined;
}) => {
  const [featuresData, setFeaturesData] =
    useState<TrackFeaturesDataType | null>(null);

  useEffect(() => {
    getTrackFeatures(props.id).then((response) => {
      const newData: TrackFeaturesDataType = {
        duration: response.data.track.duration,
        key: response.data.track.key,
        modality: response.data.track.mode,
        time_signature: response.data.track.time_signature,
        sections: response.data.sections.length,
        beats: response.data.beats.length,
        segments: response.data.segments.length,
        bars: response.data.bars.length,
        tempo: response.data.track.tempo,
      };
      setFeaturesData(newData);
    });
  }, []);

  const pitchClassFromInteger = (integerValue: number | undefined) => {
    const pitchClasses = [
      "C",
      "C♯/D♭",
      "D",
      "D♯/E♭",
      "E",
      "F",
      "F♯/G♭",
      "G",
      "G♯/A♭",
      "A",
      "A♯/B♭",
      "B",
    ];
    if (integerValue && integerValue >= 0 && integerValue <= 11) {
      return pitchClasses[integerValue];
    } else {
      return "Invalid pitch class";
    }
  };

  return (
    <TrackFeaturesStyled>
      <TrackFeaturescontent>
        <TrackFeaturesName>
          {" "}
          {featuresData && Math.floor(featuresData?.duration / 60)} :{" "}
          {featuresData &&
            (Math.floor(featuresData?.duration % 60) < 10
              ? "0" + Math.floor(featuresData?.duration % 60)
              : Math.floor(featuresData?.duration % 60))}
        </TrackFeaturesName>
        <TrackFeaturesInfo>duration</TrackFeaturesInfo>
      </TrackFeaturescontent>

      <TrackFeaturescontent>
        <TrackFeaturesName>
          {pitchClassFromInteger(featuresData?.key)}
        </TrackFeaturesName>
        <TrackFeaturesInfo>key</TrackFeaturesInfo>
      </TrackFeaturescontent>

      <TrackFeaturescontent>
        <TrackFeaturesName>
          {featuresData?.modality === 1 ? "MAJOR" : "MINOR"}
        </TrackFeaturesName>
        <TrackFeaturesInfo>modality</TrackFeaturesInfo>
      </TrackFeaturescontent>

      <TrackFeaturescontent>
        <TrackFeaturesName>{featuresData?.time_signature}</TrackFeaturesName>
        <TrackFeaturesInfo>time signature</TrackFeaturesInfo>
      </TrackFeaturescontent>

      <TrackFeaturescontent>
        <TrackFeaturesName>{featuresData?.tempo.toFixed(0)}</TrackFeaturesName>
        <TrackFeaturesInfo>tempo(BPM)</TrackFeaturesInfo>
      </TrackFeaturescontent>

      <TrackFeaturescontent>
        <TrackFeaturesName>{props.popularity}%</TrackFeaturesName>
        <TrackFeaturesInfo>popularity</TrackFeaturesInfo>
      </TrackFeaturescontent>

      <TrackFeaturescontent>
        <TrackFeaturesName>{featuresData?.bars}</TrackFeaturesName>
        <TrackFeaturesInfo>bars</TrackFeaturesInfo>
      </TrackFeaturescontent>

      <TrackFeaturescontent>
        <TrackFeaturesName>{featuresData?.beats}</TrackFeaturesName>
        <TrackFeaturesInfo>beats</TrackFeaturesInfo>
      </TrackFeaturescontent>

      <TrackFeaturescontent>
        <TrackFeaturesName>{featuresData?.sections}</TrackFeaturesName>
        <TrackFeaturesInfo>sections</TrackFeaturesInfo>
      </TrackFeaturescontent>

      <TrackFeaturescontent>
        <TrackFeaturesName>{featuresData?.segments}</TrackFeaturesName>
        <TrackFeaturesInfo>segments</TrackFeaturesInfo>
      </TrackFeaturescontent>
    </TrackFeaturesStyled>
  );
};

const TrackFeaturesStyled = styled.div`
  width: 80%;
  display: grid;
  grid-template-columns: repeat(5, minmax(100px, 1fr));
  margin-top: 50px;
  border-top: 1px solid grey;
  border-left: 1px solid grey;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, auto);
  }
`;

const TrackFeaturescontent = styled.div`
  min-height: 70px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid grey;
  border-right: 1px solid grey;
`;

const TrackFeaturesName = styled.h4`
  color: rgb(179, 179, 179);
  font-size: 20px;
  letter-spacing: 1.5px;
  font-weight: 700;
  margin-bottom: 5px;
`;

const TrackFeaturesInfo = styled.p`
  color: rgb(179, 179, 179);
  font-weight: 300;
  text-transform: capitalize;
  font-size: 14px;
`;
