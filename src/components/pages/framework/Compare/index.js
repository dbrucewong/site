import React from 'react'
import CompareBox from './Box'
import {
  Box,
  Background,
  Flex,
  Image,
  Absolute,
} from 'serverless-design-system'
import {
  AppContainerNewest as AppContainer,
  WhiteButtonNew as WhiteButton,
} from 'src/components'
import styled from 'styled-components'
import spinningWheel from 'src/assets/images/pages/framework/spinning-wheel.svg'
import spinningWheelAnimation from 'src/assets/images/pages/framework/spinning-wheel-animation.svg'
import { Heading, Button, MobileCenteredBox } from 'src/fragments/DesignSystem'
import { enterprise, developersMenu } from 'src/constants/urls'
import { InternalLink } from 'src/fragments'

const openSourcePoints = [
  ['An open-source CLI for building and deploying serverless applications', ''],
  ['Support for AWS, Google Cloud Platform, Microsoft Azure, and more', ''],
  ['Community provided plugins, examples and support', ''],
]

const enterprisePoints = [
  ['A hosted or self-hosted console that helps you build more and manage less'],
  [
    'Simplifies secrets management, injects best practices, and delivers actionable, troubleshooting insights',
  ],
  ['Dedicated support and service from serverless experts'],
]

const EnterpriseComparisonBox = styled(Background)`
  margin-top: 325px;

  @media screen and (max-width: 1024px) {
    margin-top: 16px;
  }
`

const OpenSourceComparisonBox = styled(Background)`
  @media screen and (min-width: 1026px) {
    margin-top: 200px;
  }
`

const LeftSpinningWheel = styled(Absolute)`
  @media screen and (min-width: 2300px) {
    left: 15%;
  }

  @media screen and (min-width: 3000px) {
    left: 25%;
  }
`

const RightSpinningWheel = styled(Absolute)`
  @media screen and (min-width: 2300px) {
    right: 15%;
  }

  @media screen and (min-width: 3000px) {
    right: 25%;
  }
`

export default class ComparisonBoxes extends React.Component {
  constructor() {
    super()
    this.state = {
      usingSafariDesktop: false,
    }
  }

  componentDidMount() {
    const windowGlobal = typeof window !== 'undefined' && window
    const navigatorGlobal = typeof navigator !== 'undefined' && navigator

    if (windowGlobal && navigatorGlobal) {
      const using_safari_browser = /^((?!chrome|android).)*safari/i.test(
        navigatorGlobal.userAgent
      )
      const using_desktop = windowGlobal.innerWidth > 1200

      if (using_safari_browser && using_desktop) {
        this.setState({ usingSafariDesktop: true })
      }
    }
  }

  render() {
    return (
      <AppContainer>
        <Heading.h3 align='center' mb={0}>
          Add Serverless Framework Enterprise
        </Heading.h3>
        <Heading.h3 align='center'>
          for a complete serverless solution
        </Heading.h3>
        <Flex
          mb={[62, 62, 0, 0, '100px', '100px']}
          flexDirection={['column', 'column', 'column', 'column', 'row']}
          mt={[62, 62, 92, 92, 46]}
          pb={52}
        >
          <Box
            display={['none', 'none', 'none', 'none', 'block']}
            mt={[0, 0, 0, 0, '10%', 0]}
          >
            <RightSpinningWheel
              right='0'
              zIndex='-1'
              width={[0, 0, 0, 0, '40%', '680px']}
            >
              <Image
                src={
                  this.state.usingSafariDesktop
                    ? spinningWheel
                    : spinningWheelAnimation
                }
              />
            </RightSpinningWheel>
          </Box>
          <Box
            display={['none', 'none', 'none', 'none', 'block']}
            mt={[0, 0, 0, 0, '35%', '30%']}
          >
            <LeftSpinningWheel
              left='0'
              zIndex='-1'
              width={[0, 0, 0, 0, '40%', '650px']}
            >
              <Image
                src={
                  this.state.usingSafariDesktop
                    ? spinningWheel
                    : spinningWheelAnimation
                }
              />
            </LeftSpinningWheel>
          </Box>

          <OpenSourceComparisonBox
            background='#fd5750'
            width={['auto', 'auto', 'auto', 'auto', '50%']}
            maxHeight={['auto', 'auto', '515px']}
          >
            <CompareBox points={openSourcePoints} heading='open source' />
            <MobileCenteredBox pb={'32px'} px={'32px'} pt={'14px'}>
              <InternalLink to={developersMenu.docs}>
                <WhiteButton>install free</WhiteButton>
              </InternalLink>
            </MobileCenteredBox>
          </OpenSourceComparisonBox>
          <EnterpriseComparisonBox
            background='black'
            width={['auto', 'auto', 'auto', 'auto', '50%']}
          >
            <CompareBox points={enterprisePoints} heading='enterprise' />
            <MobileCenteredBox pb={'32px'} px={'32px'} pt={'14px'}>
              <InternalLink to={enterprise}>
                <Button m='auto' className='enterprise-learn-more'>
                  learn more
                </Button>
              </InternalLink>
            </MobileCenteredBox>
          </EnterpriseComparisonBox>
        </Flex>
      </AppContainer>
    )
  }
}
