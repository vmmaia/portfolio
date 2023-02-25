import React from 'react';
import { Tag, Typography } from 'antd';

const Job = (props) => {
    return (
        <div>
            <Typography.Text strong style={{ fontSize: '1.5rem' }}>
                {`${props.job.company}`}
            </Typography.Text>
            <Typography.Text
                type="secondary"
                style={{ fontSize: '0.75rem' }}
                italic
            >
                {` (${props.job.startDate} - ${props.job.endDate})`}
            </Typography.Text>
            <br />
            <Typography.Text>{props.job.position}</Typography.Text>
            <br />
            <Typography.Text>
                {`${props.job.city}, ${props.job.country} `}
            </Typography.Text>
            <Typography.Text type="secondary">
                {`${props.job.regime}`}
            </Typography.Text>
            <br />
            <br />
            <Typography.Paragraph>{props.job.description}</Typography.Paragraph>
            <Typography.Paragraph>
                <Typography.Text strong>{`Technologies: `}</Typography.Text>
                <Typography.Paragraph style={{ lineHeight: '2rem' }}>
                    {props.job.techStack.map((t, idx) => (
                        <Tag key={idx}>{t}</Tag>
                    ))}
                </Typography.Paragraph>
            </Typography.Paragraph>
        </div>
    );
};

export default Job;
