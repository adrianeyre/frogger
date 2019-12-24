import React from 'react';

import IDrawSpriteProps from './interfaces/draw-sprite-props';

export default class DrawSprite extends React.Component<IDrawSpriteProps, {}> {

	public render() {
		return <div key={ this.props.sprite.key } style={ this.styleSprite(this.props.sprite.x, this.props.sprite.y) }>
			<img
				src={ this.props.sprite.image }
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
		WebkitTransform: `translate3d(${ (x - 1) * 57 + this.props.sprite.xOffset }px, ${ y * 52 + this.props.sprite.yOffset }px, 0)`,
		transform: `translate3d(${ (x - 1) * 57 + this.props.sprite.xOffset }px, ${ y * 52 + this.props.sprite.yOffset }px, 0)`,
		zIndex: this.props.sprite.zIndex,
	})
}
