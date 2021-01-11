import React from 'react';

import IDrawSpriteProps from './interfaces/draw-sprite-props';

export default class DrawSprite extends React.Component<IDrawSpriteProps, {}> {
	private offsetHeight: number = 0;
	private offsetWidth: number = 0;

	constructor(props: IDrawSpriteProps) {
		super(props);

		this.updateOffSets();
	}

	public componentDidUpdate() {
		this.updateOffSets();
	}

	public render() {
		if (!this.props.sprite.visable) return <div></div>

		return <div key={ this.props.sprite.key } style={ this.styleSprite(this.props.sprite.x, this.props.sprite.y) }>
			<img
				src={ this.props.sprite.image }
				height={ this.props.height }
				width={ this.props.width }
				alt="sprite"
			/>
		</div>
	}

	private styleSprite = (x: number, y: number) => ({
		width: 0,
		height: 0,
		opacity: 1,
		WebkitTransform: `translate3d(${ (x - 1) * this.props.width + this.offsetWidth }px, ${ this.offsetHeight + (y - 1) * this.props.height }px, 0)`,
		transform: `translate3d(${ (x - 1) * this.props.width + this.offsetWidth }px, ${ this.offsetHeight + (y - 1) * this.props.height }px, 0)`,
		zIndex: this.props.sprite.zIndex,
	})

	private updateOffSets = () => {
		this.offsetHeight = (this.props.containerWidth / 100) * 9;
		this.offsetWidth = this.props.sprite.xOffset ? -this.props.width / 2 : 0;
	}
}
