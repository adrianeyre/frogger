import React from 'react';

import IDrawSpriteProps from './interfaces/draw-sprite-props';

export default class DrawSprite extends React.Component<IDrawSpriteProps, {}> {

	public render() {
		return <div key={ this.props.sprite.key } style={ this.styleSprite(this.props.sprite.x, this.props.sprite.y) }>
			<img
				src={ this.props.image }
				height={ this.props.sprite.height }
				width={ this.props.sprite.width }
				alt="sprite"
			/>
		</div>
	}

	private styleSprite = (x: number, y: number) => ({
		width: 0,
		height: 0,
		opacity: 1,
		WebkitTransform: `translate3d(${ (x - 1) * 57 + 10 }px, ${ y * 52 + 28 }px, 0)`,
		transform: `translate3d(${ (x - 1) * 57 + 10 }px, ${ y * 52 + 28 }px, 0)`,
		zIndex: 5000
	})
}
