import styled from 'styled-components';

type TimelineItem = {
    date: string;
    label: string;

}

type TimelineProps = {
    items: TimelineItem[];
}

export const Timeline = ({ items }: TimelineProps) => {
    return (
        <TimelineWrapper>
            <TimelineLine />
            {items.map((item,index ) => (
                <TimelinePoint key={index}>
                    <TimelineDot />
                    <TimelineLabel>{item.label}</TimelineLabel>
                    <TimelineDate>{item.date}</TimelineDate>
                </TimelinePoint>
            ))}
        </TimelineWrapper>
    );
};





const TimelineWrapper = styled.div`
    position: relative;
    width: 80%;
    max-width: 800px;
    margin: 90px auto;
    padding: 0;
    display: flex;
    justify-content: space-between;
`;

const TimelineLine = styled.div`
    position: absolute;
    left: 45px;
    right: 45px;
    height: 4px;
    background: linear-gradient(270deg, #13adc7 0%, #6978d1 66.67%, #945dd6 100%);
    border-radius: 2px;
`;

const TimelinePoint = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    z-index: 2;
`;

const TimelineDot = styled.div`
    width: 25px;
    height: 25px;
    background: white;
    border-radius: 50%;
    box-shadow: 0 2px 4px rgba(0,0,0,0.2);
    margin-top: -11px; /
`;

const TimelineDate = styled.div`
    font-weight: 600;
    font-size: 18px;
    color: #fff;
`;

const TimelineLabel = styled.div`
    line-height: 1.3;
    font-weight: 500;
    font-size: 14px;
    text-align: center;
    color: #fff;
`;


