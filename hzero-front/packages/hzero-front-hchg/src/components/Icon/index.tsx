// Generated by gulp icon - do not modify manually

// import * as React from 'react';

// const iconList = ['alipay', 'unionpay', 'wxpay'];

// export interface IconProps extends React.SVGAttributes<SVGElement> {
//   color?: string;
//   className?: string;
//   height?: number;
//   kind?: string | any;
//   preview?: boolean;
//   size?: number;
//   style?: any;
//   width?: number;
//   wrapperStyle?: any;
// }
// export default class Icon extends React.Component<IconProps, {}> {
//   static defaultProps = {
//     className: '',
//     color: 'currentColor',
//     size: 32,
//   };

//   render() {
//     const { kind, preview } = this.props;
//     return preview ? this.renderPreview() : this.renderIcon(kind);
//   }

//   renderPreview() {
//     return <div>{iconList.map(kind => this.renderPreviewKind(kind))}</div>;
//   }

//   renderIcon(kind: string) {
//     const { wrapperStyle } = this.props;
//     if (wrapperStyle) {
//       return <div style={wrapperStyle}>{this.getIcon(kind)}</div>;
//     }
//     return this.getIcon(kind);
//   }

//   renderPreviewKind(kind: string) {
//     return (
//       <div key={kind}>
//         <h3>
//           &lt;Icon kind="
//           {kind}
// " /&gt;
//         </h3>
//         {this.renderIcon(kind)}
//       </div>
//     );
//   }

//   getIcon(kind: string) {
//     const {
//       color,
//       height,
//       onClick,
//       onMouseEnter,
//       onMouseLeave,
//       size,
//       style,
//       width,
//       className,
//     } = this.props;

//     switch (kind) {
//       case 'alipay':
//         return (
//           <svg
//             fill={color}
//             height={height || size}
//             width={width || size}
//             onClick={onClick}
//             onMouseEnter={onMouseEnter}
//             onMouseLeave={onMouseLeave}
//             style={style}
//             className={className}
//             viewBox="0 0 1024 1024"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <defs>
//               <style />
//             </defs>
//             <path d="M902.095 652.871l-250.96-84.392s19.287-28.87 39.874-85.472c20.59-56.606 23.539-87.689 23.539-87.689l-162.454-1.339v-55.487l196.739-1.387v-39.227H552.055v-89.29h-96.358v89.294H272.133v39.227l183.564-1.304v59.513h-147.24v31.079h303.064s-3.337 25.223-14.955 56.606c-11.615 31.38-23.58 58.862-23.58 58.862s-142.3-49.804-217.285-49.804c-74.985 0-166.182 30.123-175.024 117.55-8.8 87.383 42.481 134.716 114.728 152.139 72.256 17.513 138.962-.173 197.04-28.607 58.087-28.391 115.081-92.933 115.081-92.933l292.486 142.041c-11.932 69.3-72.067 119.914-142.387 119.844H266.37c-79.714.078-144.392-64.483-144.466-144.194V266.374c-.074-79.72 64.493-144.399 144.205-144.47h491.519c79.714-.073 144.396 64.49 144.466 144.203v386.764zm-365.76-48.895s-91.302 115.262-198.879 115.262c-107.623 0-130.218-54.767-130.218-94.155 0-39.34 22.373-82.144 113.943-88.333 91.519-6.18 215.2 67.226 215.2 67.226h-.047z" />
//           </svg>
//         );
//       case 'unionpay':
//         return (
//           <svg
//             fill={color}
//             height={height || size}
//             width={width || size}
//             onClick={onClick}
//             onMouseEnter={onMouseEnter}
//             onMouseLeave={onMouseLeave}
//             style={style}
//             className={className}
//             viewBox="0 0 1325 1024"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <defs>
//               <style />
//             </defs>
//             <path
//               d="M342.874353 817.543529l87.341176-376.470588h-3.011764c-3.011765 0-7.529412 1.505882-10.541177 3.011765-1.505882 7.529412-6.023529 28.611765-9.035294 37.647059-4.517647 19.576471-4.517647 22.588235-6.023529 33.129411l-1.505883 1.505883h-37.647058l-1.505883-1.505883 9.035294-36.141176c7.529412-33.129412 9.035294-45.176471 12.047059-61.741176l1.505882-1.505883c16.564706-3.011765 21.082353-3.011765 40.658824-6.023529l1.505882 1.505882-3.011764 10.541177c3.011765-1.505882 6.023529-4.517647 9.035294-6.02353 1.505882-1.505882 3.011765-1.505882 6.023529-3.011765l45.176471-191.247058c9.035294-42.164706 51.2-75.294118 91.858823-75.294118h-274.070588c-42.164706 0-82.823529 33.129412-91.858823 75.294118l-138.541177 596.329411c-9.035294 42.164706 16.564706 75.294118 57.223529 75.294118h272.564706c-42.164706 0-67.764706-34.635294-57.223529-75.294118z m-27.105882-313.223529c-13.552941 7.529412-33.129412 12.047059-54.211765 12.047059-16.564706 0-45.176471-3.011765-54.211765-19.576471-4.517647-6.023529-6.023529-12.047059-6.023529-19.57647l3.011764-27.105883 1.505883-7.529411 22.588235-97.882353 1.505882-6.02353s7.529412 1.505882 49.694118 0v1.505883c-4.517647 12.047059-25.6 97.882353-25.6 97.882352l-4.517647 25.6v4.517648c1.505882 12.047059 9.035294 19.576471 22.588235 19.57647 9.035294 0 15.058824-3.011765 22.588236-7.529412 10.541176-9.035294 13.552941-22.588235 18.070588-42.164706 0 0 21.082353-94.870588 21.082353-100.894117 3.011765 0 12.047059 1.505882 42.164706 0v1.505882c-4.517647 12.047059-25.6 102.4-25.6 102.4l-3.011765 9.035294c-3.011765 19.576471-9.035294 40.658824-31.623529 54.211765z"
//               fill="#D43634"
//               p-id="2085"
//             />
//             <path
//               d="M669.650824 817.543529l22.588235-99.388235H665.133176c-4.517647 0-7.529412 0-10.541176-1.505882-3.011765-1.505882-6.023529-4.517647-6.023529-7.529412s1.505882-7.529412 3.011764-13.552941l46.682353-153.6h33.129412l-4.517647 16.564706 4.517647-4.517647 9.035294-37.647059h-21.082353v-1.505883c1.505882-6.023529 3.011765-13.552941 4.517647-19.57647l1.505883-9.035294c3.011765-13.552941 6.023529-30.117647 6.023529-36.141177 0-3.011765 1.505882-10.541176-7.529412-10.541176-3.011765 0-7.529412 1.505882-12.047059 3.011765-1.505882 7.529412-6.023529 28.611765-9.035294 37.647058-4.517647 19.576471-4.517647 22.588235-6.023529 33.129412l-1.505882 1.505882h-37.647059l-1.505883-1.505882 9.035294-36.141176c7.529412-33.129412 9.035294-45.176471 10.541177-61.741177l1.505882-1.505882c16.564706-3.011765 21.082353-3.011765 40.658824-6.02353l1.505882 1.505883-3.011765 10.541176c3.011765-1.505882 6.023529-4.517647 9.035295-6.023529 9.035294-4.517647 18.070588-6.023529 24.094117-6.02353 4.517647 0 9.035294 0 13.552941 3.011765l43.670589-191.247059c9.035294-42.164706 51.2-75.294118 93.364706-75.294117h-326.776471c-42.164706 0-82.823529 33.129412-91.858824 75.294117l-43.670588 191.247059c7.529412-3.011765 13.552941-3.011765 18.070588-3.011765 7.529412 0 16.564706 3.011765 21.082353 12.047059 3.011765 9.035294 1.505882 19.576471-3.011764 39.152941l-3.011765 10.541177c-4.517647 22.588235-6.023529 27.105882-7.529412 42.164706l-4.517647 4.517647h-37.647059v-1.505883c1.505882-6.023529 3.011765-13.552941 4.517647-19.57647l1.505883-9.035294c3.011765-13.552941 6.023529-30.117647 6.023529-36.141177 0-3.011765 1.505882-9.035294-4.517647-10.541176l-87.341176 376.470588c-9.035294 42.164706 16.564706 75.294118 57.223529 75.294118h328.282353c-40.658824 1.505882-66.258824-33.129412-57.223529-73.788236z m12.047058-263.529411l-7.529411 24.094117h-52.705883l-6.023529 4.517647c-3.011765 3.011765-3.011765 1.505882-6.02353 3.011765s-9.035294 4.517647-18.070588 4.517647h-16.564706l7.529412-22.588235h4.517647c4.517647 0 7.529412 0 9.035294-1.505883 1.505882-1.505882 3.011765-3.011765 6.02353-7.529411l9.035294-18.070589h39.152941l-6.023529 13.552942h37.647058z m-140.047058-124.988236l-7.529412 30.117647c-1.505882 6.023529-3.011765 13.552941-4.517647 19.576471-3.011765 13.552941-4.517647 19.576471-6.02353 22.588235-1.505882 3.011765-1.505882 6.023529-3.011764 13.552941h-43.670589c1.505882-7.529412 3.011765-10.541176 4.517647-13.552941s1.505882-6.023529 4.517647-13.552941c3.011765-10.541176 4.517647-18.070588 6.02353-25.6 1.505882-6.023529 4.517647-24.094118 6.023529-30.117647-1.505882-4.517647 1.505882-9.035294 7.529412-13.552941 9.035294-6.023529 22.588235-7.529412 31.623529-3.011765 6.023529 3.011765 7.529412 9.035294 4.517648 13.552941z m7.529411 34.635294c3.011765-13.552941 9.035294-28.611765 19.576471-39.152941 16.564706-15.058824 36.141176-15.058824 45.17647-15.058823 13.552941 0 28.611765 3.011765 36.141177 13.552941 4.517647 6.023529 9.035294 18.070588 4.517647 40.658823-1.505882 7.529412-6.023529 24.094118-16.564706 34.635295-13.552941 13.552941-30.117647 18.070588-48.188235 18.070588-6.023529 0-16.564706-1.505882-24.094118-4.517647-22.588235-9.035294-19.576471-33.129412-16.564706-48.188236z m81.317647 254.494118h-43.670588c-3.011765 0-6.023529 0-10.541176-1.505882-3.011765-1.505882-6.023529-3.011765-7.529412-4.517647-1.505882-3.011765-4.517647-4.517647-3.011765-10.541177l12.047059-42.164706h-21.082353l7.529412-24.094117h21.082353l6.023529-19.576471h-21.082353l7.529412-22.588235h94.870588l-7.529412 22.588235h-37.647058l-6.02353 19.576471h39.152941l-6.023529 24.094117h-39.152941l-9.035294 31.62353c-1.505882 3.011765 9.035294 4.517647 13.552941 4.517647l19.57647-3.011765-9.035294 25.6z"
//               fill="#034582"
//               p-id="2086"
//             />
//             <path
//               d="M723.862588 566.061176l-7.529412 25.6s3.011765-1.505882 6.02353-4.517647l4.517647-21.082353h-3.011765z m-129.505882-72.282352c4.517647 0 7.529412-3.011765 10.541176-7.529412 4.517647-6.023529 7.529412-21.082353 9.035294-24.094118 4.517647-18.070588 3.011765-28.611765-6.023529-28.611765-12.047059 0-16.564706 15.058824-21.082353 31.62353-1.505882 6.023529-3.011765 12.047059-3.011765 16.564706 3.011765 12.047059 10.541176 12.047059 10.541177 12.047059z m94.870588 189.741176c-1.505882 4.517647-1.505882 7.529412-1.505882 7.529412 1.505882 1.505882 3.011765 3.011765 4.517647 3.011764h4.517647l13.552941-58.729411h-7.529412l-13.552941 48.188235z m24.094118-81.317647l-3.011765 10.541176h7.529412l3.011765-10.541176h-7.529412z"
//               fill="#034582"
//               p-id="2087"
//             />
//             <path
//               d="M967.815529 493.778824c4.517647 0 12.047059-3.011765 15.058824-7.529412 1.505882-1.505882 3.011765-6.023529 4.517647-9.035294 1.505882-4.517647 3.011765-10.541176 3.011765-15.058824 1.505882-3.011765 1.505882-6.023529 1.505882-9.035294 1.505882-12.047059-3.011765-19.576471-10.541176-19.576471-12.047059 0-16.564706 15.058824-21.082353 31.62353-1.505882 6.023529-3.011765 12.047059-3.011765 16.564706 3.011765 12.047059 10.541176 12.047059 10.541176 12.047059z m-203.294117 118.964705l3.011764-10.541176h-48.188235l-3.011765 10.541176h40.658824c6.023529 0 7.529412 1.505882 7.529412 0z"
//               fill="#107C84"
//               p-id="2088"
//             />
//             <path
//               d="M1198.215529 147.425882h-296.658823c-42.164706 0-82.823529 33.129412-93.364706 75.294118l-43.670588 191.247059c3.011765 1.505882 6.023529 4.517647 7.529412 9.035294 3.011765 9.035294 1.505882 19.576471-3.011765 39.152941l-3.011765 10.541177c-4.517647 22.588235-6.023529 27.105882-7.529412 42.164705l-1.505882 1.505883h-16.564706l-9.035294 37.647059c3.011765-3.011765 9.035294-6.023529 12.047059-7.529412 7.529412-3.011765 24.094118-6.023529 24.094117-6.02353h52.705883l-18.070588 60.235295c-3.011765 10.541176-6.023529 16.564706-9.035295 19.57647-1.505882 3.011765-4.517647 6.023529-9.035294 9.035294-4.517647 3.011765-9.035294 4.517647-12.047058 4.517647h-60.235295l-13.552941 58.729412 18.070588-1.505882-7.529411 27.105882h-15.058824l-24.094117 99.388235c-9.035294 42.164706 16.564706 75.294118 57.223529 75.294118h296.658823c42.164706 0 82.823529-33.129412 93.364706-75.294118l138.541177-594.823529c9.035294-42.164706-16.564706-75.294118-57.22353-75.294118z m-212.329411 263.529412c6.023529 3.011765 10.541176 6.023529 13.552941 10.541177v-4.517647l1.505882-1.505883c18.070588-3.011765 22.588235-3.011765 42.164706-6.023529v1.505882c-3.011765 13.552941-7.529412 28.611765-10.541176 42.164706-7.529412 30.117647-9.035294 45.176471-12.047059 60.235294l-1.505883 1.505882h-39.152941l-1.505882-1.505882c0-1.505882 1.505882-4.517647 1.505882-6.023529-6.023529 4.517647-12.047059 9.035294-19.57647 9.035294s-13.552941-1.505882-21.082353-4.517647c-22.588235-9.035294-19.576471-34.635294-16.564706-48.188236 3.011765-13.552941 9.035294-28.611765 19.57647-39.152941 16.564706-13.552941 34.635294-16.564706 43.670589-13.552941z m-204.8 105.411765l28.611764-118.964706 12.047059-54.211765s1.505882-4.517647 1.505883-6.023529c6.023529 0 18.070588 1.505882 51.2 0h12.047058c25.6 0 46.682353 0 58.729412 15.058823 4.517647 6.023529 6.023529 13.552941 6.02353 21.082353 0 6.023529-1.505882 12.047059-1.505883 16.564706-4.517647 19.576471-15.058824 36.141176-28.611765 46.682353-21.082353 16.564706-49.694118 16.564706-73.788235 16.564706h-3.011765l-3.011764 3.011765c0 1.505882-6.023529 24.094118-6.02353 24.094117s-6.023529 31.623529-7.529411 37.647059c-7.529412-1.505882-19.576471-1.505882-46.682353-1.505882z m10.541176 137.035294c-1.505882 4.517647-3.011765 7.529412-6.023529 10.541176-3.011765 3.011765-7.529412 6.023529-18.070589 6.02353h-18.070588v16.564706c0 4.517647 1.505882 4.517647 1.505883 4.517647s1.505882 1.505882 3.011764 1.505882h6.02353l18.070588-1.505882-9.035294 27.105882h-19.576471c-13.552941 0-24.094118 0-28.611764-3.011765-3.011765-1.505882-4.517647-4.517647-3.011765-9.035294l1.505882-64.752941h31.62353v13.552941h7.529411c3.011765 0 4.517647 0 6.02353-1.505882 1.505882-1.505882 1.505882-1.505882 1.505882-3.011765l3.011765-10.541176h25.6l-3.011765 13.552941z m111.435294 64.752941h-34.635294l3.011765-7.529412h-69.270588l7.529411-22.588235h7.529412l36.141177-121.976471 7.529411-24.094117h34.635294l-3.011764 12.047059s9.035294-6.023529 18.070588-9.035294c7.529412-1.505882 43.670588-3.011765 55.717647-3.011765h37.647059v13.552941c0 3.011765 1.505882 3.011765 6.023529 3.011765h6.02353l-6.02353 24.094117h-19.57647c-18.070588 1.505882-24.094118-6.023529-24.094118-15.058823v-13.552941l-3.011765 12.047058h-12.047058l-36.141177 120.470589h9.035294l-7.529412 24.094117h-10.541176l-3.011765 7.529412z m155.105883-106.917647h-37.647059l-6.02353 19.576471h37.647059l-6.023529 19.57647h-40.658824l-7.529412 9.035294h16.564706l4.517647 25.6c0 3.011765 0 4.517647 1.505883 6.02353 1.505882 1.505882 6.023529 1.505882 9.035294 1.505882h4.517647l-7.529412 25.6h-21.082353c-4.517647 0-6.023529-3.011765-9.035294-4.517647-3.011765-1.505882-6.023529-4.517647-6.023529-9.035294l-4.517647-25.6-18.070589 25.6c-6.023529 7.529412-13.552941 13.552941-27.105882 13.552941h-25.6l7.529412-22.588235h10.541176c3.011765 0 6.023529-1.505882 7.529412-1.505883 1.505882-1.505882 3.011765-1.505882 6.023529-4.517647l27.105883-37.647058h-36.141177l6.02353-21.082353h40.658823l6.02353-19.576471h-40.658824l7.529412-22.588235h112.941176l-12.047058 22.588235z m24.094117-70.776471l-1.505882 1.505883-15.058824 25.6c-4.517647 9.035294-13.552941 15.058824-27.105882 15.058823h-22.588235l7.529411-22.588235h4.517648c3.011765 0 4.517647 0 6.023529-1.505882 1.505882 0 1.505882-1.505882 3.011765-3.011765l7.529411-13.552941c12.047059-18.070588 15.058824-25.6 27.105883-45.176471-1.505882-22.588235-3.011765-30.117647-4.517647-43.670588-1.505882-9.035294-3.011765-18.070588-3.011765-27.105882-1.505882-18.070588-1.505882-15.058824-4.517647-27.105883v-1.505882l1.505882-1.505882c18.070588-1.505882 18.070588-3.011765 37.647059-6.02353l1.505882 1.505883 3.011765 49.694117v3.011765c10.541176-22.588235 10.541176-16.564706 22.588235-45.176471v-1.505882l1.505883-1.505882c16.564706-1.505882 19.576471-3.011765 39.152941-6.02353l1.505882 1.505883c-1.505882 0-75.294118 128-85.835294 149.082352z"
//               fill="#107C84"
//               p-id="2089"
//             />
//             <path
//               d="M775.062588 579.614118l4.517647-13.552942h-51.2l-4.517647 21.082353c7.529412-4.517647 15.058824-7.529412 22.588236-7.529411h28.611764z m105.411765-159.62353c10.541176-4.517647 18.070588-15.058824 19.576471-27.105882 3.011765-13.552941-1.505882-22.588235-10.541177-27.105882l-25.6-1.505883h-4.517647V368.790588l-12.047059 52.705883v3.011764h6.02353c9.035294 0 19.576471 0 27.105882-4.517647z m-28.611765 266.541177h28.611765l7.529412-27.105883h-28.611765l-7.529412 27.105883z m36.141177-120.470589l-9.035294 30.117648s10.541176-4.517647 16.564705-6.02353c6.023529-1.505882 15.058824-1.505882 15.058824-1.505882l6.023529-22.588236h-28.611764z m-24.094118 76.8s10.541176-6.023529 16.564706-7.529411c6.023529-1.505882 15.058824-3.011765 15.058823-3.011765l7.529412-22.588235h-28.611764l-10.541177 33.129411z"
//               fill="#107C84"
//               p-id="2090"
//             />
//           </svg>
//         );
//       case 'wxpay':
//         return (
//           <svg
//             fill={color}
//             height={height || size}
//             width={width || size}
//             onClick={onClick}
//             onMouseEnter={onMouseEnter}
//             onMouseLeave={onMouseLeave}
//             style={style}
//             className={className}
//             viewBox="0 0 1024 1024"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <defs>
//               <style />
//             </defs>
//             <path d="M403.267 621.184c-54.79 30.418-62.925-17.08-62.925-17.08l-68.675-159.621c-26.424-75.853 22.871-34.207 22.871-34.207s42.302 31.867 74.399 51.297c32.082 19.425 68.649 5.694 68.649 5.694l448.962-206.408C803.707 158.198 666.88 91.069 511.97 91.069c-252.805 0-457.717 178.647-457.717 399.023 0 126.766 67.855 239.58 173.547 312.709l-19.057 109.132s-9.282 31.872 22.912 17.091c21.945-10.076 77.88-46.188 111.181-68.152 52.352 18.176 109.379 28.267 169.175 28.267 252.78 0 457.744-178.642 457.744-399.022 0-63.836-17.265-124.119-47.867-177.618-143.048 85.699-475.74 284.918-518.62 308.685z" />
//           </svg>
//         );
//       default:
//         return null;
//     }
//   }
// }
