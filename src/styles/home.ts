import styled from "styled-components";

export const Container = styled.div`
  height: calc(100vh - 6rem);
  width: 100%;
  display: flex;
  justify-content: center;
`

// .container {

//   .content {
//     width: 90%;
//     display: flex;
//     flex-direction: row;
//     justify-content: space-between;
//     margin-top: 10rem;

//     .textOrange {
//       color: var(--orange);
//     }

//     .textGreen {
//       color: var(--green);
//     }

//     h1 {
//       font-size: 4rem;
//       font-weight: 600;
//     }

//     h2 {
//       font-size: 3rem;
//       font-weight: 600;
//     }
//     .leftSide {
//       .links {
//         margin-top: 1rem;
//         display: flex;
//         flex-direction: row;
//         align-items: center;
//         gap: 1.5rem;
//         button {
//           display: flex;
//           justify-content: center;
//           align-items: center;
//           border: none;
//           padding: 1rem 8rem;
//           border-radius: 5px;
//           color: var(--white);
//           background-color: var(--purple);
//           transition: filter 0.2s;

//           &:hover {
//             filter: brightness(0.8);
//           }
//         }

//         .icon {
//           font-size: 3.5rem;
//           color: var(--white);
//           transition: color 0.2s;

//           &:hover {
//             color: var(--purple);
//           }
//         }
//       }
//     }
//   }
// }