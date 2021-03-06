import styled from 'styled-components'
import { Icon } from 'antd'
import { Link } from 'react-router-dom'
import global from 'styles/globalStyle'

export const Container = styled(Link)`
	display: flex;
	flex-direction: column;
	width: calc(6vw + 90px);
	height: calc(6vw + 140px);
	margin-bottom: 10px;
	position: relative;
	cursor: default;
`

export const CountContainer = styled.div`
	position: absolute;
	top: 4px;
	right: 4px;
	z-index: 9;

	>i {
	 color: #fff;
	}
	
	>span {
		margin: 0 4px;
		font-size: 13px;
		color: #fff;
	}
`

export const PicContainer = styled.div`
	width: 100%;
	height: calc(100% - 50px);
	border-radius: 4px;
	overflow: hidden;
`

export const Pic = styled.img`
	width: 100%;
	height: 100%;
	border-radius: 4px;
	transition: filter .2s ease-out;

	:hover {
		filter: brightness(80%);
	}
`

export const Open = styled(Icon)`
	position: absolute;
	right: 10px;
	bottom: 60px;
	font-size: 40px;
	opacity: ${props => props.hide ? 0 : 1};
	z-index: 9;
	transition: opacity .2s ease-out;
`

export const Title = styled.span`
	height: 40px;
	line-height: 26px;
	font-size: 13px;
	padding: 8px 0 0 2px;
	color: #555;
	${global.textOverflowEllipsis}
	cursor: pointer;

	:hover {
		color: #1890ff;
	}
`