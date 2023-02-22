import React from 'react';
import {
    Row,
    Col,
    Card,
    Divider,
    Avatar,
    Typography,
    Timeline,
    Descriptions,
    Input,
    message,
    Button,
} from 'antd';
import {
    LinkedinOutlined,
    GithubOutlined,
    CopyOutlined,
} from '@ant-design/icons';

import Job from '../components/job';
import Education from '../components/education';

import MyLife from '../life.json';
import DescriptionsItem from 'antd/es/descriptions/Item';
import PortfolioItem from '../components/portfolioItem';

const email = 'vasco.matos.maia@gmail.com';

const calculateYears = (date) => {
    const ageDifMs = Date.now() - date;
    const ageDate = new Date(ageDifMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
};

const LandingPage = () => {
    const [messageApi, contextHolder] = message.useMessage();

    const copyEmail = () => {
        navigator.clipboard.writeText(email);
        messageApi.success('Email copied to clipboard');
    };

    return (
        <Row justify={'center'} gutter={[24, 24]}>
            {contextHolder}
            <Col xs={24} xl={6}>
                <Card>
                    <Row justify={'center'}>
                        <Col span={24} style={{ textAlign: 'center' }}>
                            <Avatar src="/assets/profile.jpg" size={200} />
                        </Col>
                        <Col style={{ textAlign: 'center' }}>
                            <Typography.Title
                                level={1}
                                style={{ marginBottom: '0px' }}
                            >
                                Vasco Maia
                            </Typography.Title>
                            <Typography.Title
                                level={4}
                                style={{
                                    marginTop: '0px',
                                }}
                            >
                                Software Engineer
                            </Typography.Title>
                        </Col>
                        <Col span={24}>
                            <Row
                                align={'middle'}
                                justify={'space-around'}
                                style={{ margin: '25px 0px' }}
                            >
                                <Col>
                                    <a
                                        href="https://www.linkedin.com/in/vasco-maia-451616170/"
                                        style={{ color: 'white' }}
                                    >
                                        <LinkedinOutlined
                                            style={{ fontSize: '2rem' }}
                                        />
                                    </a>
                                </Col>
                                <Col>
                                    <a
                                        href="https://github.com/vmmaia?tab=repositories"
                                        style={{ color: 'white' }}
                                    >
                                        <GithubOutlined
                                            style={{ fontSize: '2rem' }}
                                        />
                                    </a>
                                </Col>
                            </Row>
                            <Row>
                                <Col span={24} style={{ textAlign: 'center' }}>
                                    <Typography.Text strong>
                                        You can also reach me at:
                                    </Typography.Text>
                                    <br />
                                    <Input.Group compact>
                                        <Input
                                            style={{
                                                width: 'calc(100% - 50px)',
                                            }}
                                            value={email}
                                        />
                                        <Button
                                            icon={<CopyOutlined />}
                                            onClick={copyEmail}
                                        />
                                    </Input.Group>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Divider orientation="left">Language skills</Divider>
                    <Row>
                        <Col span={24}>
                            <Descriptions column={1} size={'small'} bordered>
                                <DescriptionsItem label="Mother tongue">
                                    Portuguese
                                </DescriptionsItem>
                            </Descriptions>
                            <Typography.Title level={5}>
                                English
                            </Typography.Title>
                            <Descriptions column={1} size={'small'} bordered>
                                <DescriptionsItem label="Listening">
                                    C2
                                </DescriptionsItem>
                                <DescriptionsItem label="Reading">
                                    C2
                                </DescriptionsItem>
                                <DescriptionsItem label="Writing">
                                    C2
                                </DescriptionsItem>
                                <DescriptionsItem label="Spoken production">
                                    C1
                                </DescriptionsItem>
                                <DescriptionsItem label="Spoken interaction">
                                    C1
                                </DescriptionsItem>
                            </Descriptions>
                        </Col>
                    </Row>
                </Card>
            </Col>
            <Col xs={24} xl={12}>
                <Card>
                    <Divider orientation="left">About</Divider>
                    <Row justify={'center'}>
                        <Col xs={24} xl={18}>
                            <Typography.Paragraph>
                                Welcome to the personal website of Vasco Maia, a
                                passionate{' '}
                                {calculateYears(new Date('1995-07-16'))}
                                -year-old software developer based in Aveiro -
                                Portugal.
                            </Typography.Paragraph>
                            <Typography.Paragraph>
                                With over{' '}
                                {calculateYears(new Date('2017-07-01'))} years
                                of experience in the tech industry, Vasco has
                                become a skilled programmer with expertise in
                                various programming languages and frameworks. He
                                has a background in full-stack web development
                                and is proficient in creating and maintaining
                                complex web applications.
                            </Typography.Paragraph>
                            <Typography.Paragraph>
                                In addition to his professional work, Vasco is
                                an avid learner who is always seeking to expand
                                his knowledge and skills. He enjoys reading
                                about the latest trends and advancements in the
                                tech industry and participating in online
                                communities.
                            </Typography.Paragraph>
                        </Col>
                    </Row>
                    <Divider orientation="left">Professional path</Divider>
                    <Row justify={'center'}>
                        <Col xs={24} xl={18}>
                            <Timeline
                                mode="left"
                                items={MyLife.work.map((j) => ({
                                    children: <Job job={j} />,
                                }))}
                            />
                        </Col>
                    </Row>
                    <Divider orientation="left">Education</Divider>
                    <Row justify={'center'}>
                        <Col xs={24} xl={18}>
                            <Timeline
                                mode="left"
                                items={MyLife.education.map((e) => ({
                                    children: <Education education={e} />,
                                }))}
                            />
                        </Col>
                    </Row>
                    <Divider orientation="left">Portfolio</Divider>
                    <Row gutter={[24, 24]} justify={'space-around'}>
                        {MyLife.portfolio.map((p, idx) => (
                            <PortfolioItem key={idx} project={p} />
                        ))}
                    </Row>
                </Card>
            </Col>
        </Row>
    );
};

export default LandingPage;
