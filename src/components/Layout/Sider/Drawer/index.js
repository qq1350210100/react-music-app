import React, { useState } from 'react'
import { Container} from './style'
import { Menu, Icon } from 'antd'
import { useMappedState, useDispatch } from 'redux-react-hook'
import navRouteMap from 'common/navRouteMap'
const { Item } = Menu

export default function Drawer() {
	const dispatch = useDispatch()
	const { drawerSelected } = useMappedState(state => ({
		drawerSelected: state.sider.drawer.selected
	}))

	const handleSelect = e => {
		dispatch({
			type: 'CHANGE_DRAWER_SELECTED',
			payload: e.key
		})
	}

	return (
		<Container mode="inline" onClick={handleSelect} selectedKeys={drawerSelected}>
    	{
    		navRouteMap.map(item => (
    			<Item key={item.value}>
	    			<Icon type={item.icon} />{item.title}
	    		</Item>)
    		)
    	}
    </Container>
	)
}