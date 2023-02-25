import React from 'react';
import { Card, Col, Typography, Divider, Tag, Tooltip } from 'antd';
import { GithubOutlined, GlobalOutlined } from '@ant-design/icons';

const PortfolioItem = (props) => {
    return (
        <Col xs={24} md={12} xxl={8}>
            <Card
                actions={[
                    <Tooltip title="Repository">
                        <a href={props.project.repo}>
                            <GithubOutlined key="github" />
                        </a>
                    </Tooltip>,
                    <Tooltip title="Demo">
                        <a href={props.project.live || props.project.repo}>
                            <GlobalOutlined key="preview" />
                        </a>
                    </Tooltip>,
                ]}
                style={{ height: '100%' }}
                bodyStyle={{ height: 'calc(100% - 50px)' }}
            >
                <Card.Meta
                    title={
                        <React.Fragment>
                            <Typography.Text strong>
                                {`${props.project.name}`}
                            </Typography.Text>
                            <br />
                            <Typography.Text
                                type="secondary"
                                style={{ fontSize: '0.7rem' }}
                                italic
                            >
                                {` ${props.project.date}`}
                            </Typography.Text>
                        </React.Fragment>
                    }
                    description={
                        <React.Fragment>
                            <Typography.Paragraph
                                style={{ fontSize: '0.75rem' }}
                            >
                                {props.project.description}
                            </Typography.Paragraph>
                            <Divider />
                            <Typography.Paragraph
                                style={{ lineHeight: '2rem' }}
                            >
                                {props.project.techStack.map((t, idx) => (
                                    <Tag key={idx}>{t}</Tag>
                                ))}
                            </Typography.Paragraph>
                        </React.Fragment>
                    }
                />
            </Card>
        </Col>
    );
};

export default PortfolioItem;
