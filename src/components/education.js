import React from 'react';
import { Typography, Tag } from 'antd';

const Education = (props) => {
    return (
        <div>
            <Typography.Text strong style={{ fontSize: '1.25rem' }}>
                {`${props.education.degree} in ${props.education.name}`}
            </Typography.Text>
            <Typography.Text
                type="secondary"
                style={{ fontSize: '0.75rem' }}
                italic
            >
                {` (${props.education.startDate} - ${props.education.endDate})`}
            </Typography.Text>
            <br />
            <Typography.Text>{props.education.university}</Typography.Text>
            <br />
            <br />
            <Typography.Paragraph>
                <Typography.Text strong>{`Fields of study: `}</Typography.Text>
                <Typography.Paragraph style={{ lineHeight: '2rem' }}>
                    {props.education.subjects.map((s, idx) => (
                        <Tag key={idx}>{s}</Tag>
                    ))}
                </Typography.Paragraph>
            </Typography.Paragraph>
        </div>
    );
};

export default Education;
