{/* {
                    props.infoText && <Tooltip containerStyle={styles.tooltip} withPointer={false} withOverlay={false} backgroundColor={'#000'} popover={<CreditItem title={title} url={url} content={content} />}>
                        <Text style={[ej, styles.menuStyle]}>ⓘ</Text>
                    </Tooltip>
                } */}

/**
* Animated View
* @augments { Component < Props, State >}
* /

export class AnimatedStickerView extends Component {

static ViewStyleExceptBorderPropType = (props, propName, componentName, ...rest) => {
const flattened = StyleSheet.flatten(props[propName] || {});
const usesBorder = Object.keys(flattened).some(key => key.startsWith('border'));
if (usesBorder) {
return Error(
`${componentName} does not allow any border related style properties to be specified. ` +
"Border styles for this component will behave differently across platforms. If you'd " +
'like to render a border around this component, wrap it with a View.',
);
}
return ViewPropTypes.style(props, propName, componentName, ...rest);
};

NotAllowedPropType = (props, propName, componentName) => {
const value = props[propName];
if (value != null) {
return Error(`${componentName} cannot specify '${propName}'.`);
}
return null;
};

static propTypes = {
onViewStart: PropTypes.func,
stickerHeight: PropTypes.number,
stickerWith: PropTypes.number,
loop: PropTypes.bool,
autoPlay: PropTypes.bool,
source: PropTypes.string.isRequired
}

render() {
return (
<StickerView
types={this.props}
/>
)
}
}

const p = '@chzapps/sticker/@render/_emoji_kiss.sticker.no.start.apps/auto/false/size=userPref,{render=true}/@data/ims'

AnimatedStickerView.defaultProps = {
stickerHeight: 100,
stickerWith: 100,
loop: true,
autoPlay: true,
source: p
}

/**
* Animated View
* @augments {Component<Props, State>}
*/

// export class AnimatedStickerKeyboard extends Component {

//     static propTypes = {
//         keyBoardStyle: ViewPropTypes.style,
//         menuButtonStyle: ViewPropTypes.style,
//         textColor: PropTypes.string,
//         textFont: PropTypes.string,
//         infoText: PropTypes.bool,
//         onSend: PropTypes.func,
//         visibility: PropTypes.bool,
//         onDo: PropTypes.func
//     }

//     render() {
//         return (
//             <__AnimatedKeyBoard_res
//                 infoText={false}
//                 visibility={this.props.visibility}
//                 onSend={this.props.onSend}
//                 keyBoardStyle={{ backgroundColor: 'black' }}
//                 onBackPress={this.props.onBackPress}
//                 menuButtonStyle={this.props.menuButtonStyle}
//                 textButtonColor={this.props.textButtonColor}
//                 textFont={this.props.textFont}
//             />
//         )
//     }
// }


// AnimatedStickerKeyboard.defaultProps = {
//     keyBoardStyle: { width: '100%', backgroundColor: 'black', height: '35%' },
//     menuButtonStyle: { backgroundColor: '#ffffff50', borderRadius: 5, padding: 3 },
//     textButtonColor: '#ffff',
//     infoText: true,
//     textFont: fonts.bold,
// }

// AnimatedStickerView.defaultProps = {
//     stickerHeight: 100,
//     stickerWith: 100,
//     loop: true,
//     autoPlay: true
// }

