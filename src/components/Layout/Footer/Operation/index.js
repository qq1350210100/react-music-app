import React, { Fragment, useState, useEffect } from 'react'
import { Container, PlaylistBtn, PlayOrderBtn } from './style'
import { useMappedState, useDispatch } from 'redux-react-hook'
import { Link, useHistory } from 'react-router-dom'
import navRouteMap from 'common/navRouteMap'
import * as api from 'api'

export default function Operation() {
	const dispatch = useDispatch()
	const { isPlaylistShow } = useMappedState(state => ({
		isPlaylistShow: state.content.playlist.isShow
	}))

	const [songsURL, setSongsURL] = useState([])

	useEffect(() => {
		
	}, [])

	const handleChangePlaylistStatus = () => {
		dispatch({
			type: 'CHANGE_PLAYLIST_STATUS',
			payload: !isPlaylistShow
		})
	}

	return (
		<Container>
			<PlayOrderBtn type="retweet" />
			<PlaylistBtn type="menu" onClick={handleChangePlaylistStatus} />
    </Container>
	)
}