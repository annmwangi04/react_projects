import './Portfolio.css';

function Portfolio() {
    const posts = [
        { 
            id: 1,
            image:'/images/bulksms_rtqb7f.jpg',
            title: 'PopSms - Bulk SMS',
            content: 'Experience seamless communication with our bulk SMS and email service.',
        },
        { 
            id: 2,
            image: '/images/Mtumbler_gh88qs.png',
            title:'M-Tumbler',
            content: 'Instant Bonga Points to cash converter',
        },
        { 
            id: 3,
            image: '/images/nextauth_icotjb.webp',
            title:'NextAuth.js Documentation',
            content: 'Documentation on how to use NextAuth.js',
        },
        { 
            id: 4,
            image: '/images/dr_x4yqnh.avif',
            title:'Dr Floor',
            content: 'Site that allows you to view and purchase flooring materials',
        }
    ];

    return (
        <div id='portfolio' className='portfolio'>
            <h1 className='portfolio-title'>Portfolio</h1>
            <h2 className='project-title'>Our Projects</h2>
            <div className='portfolio-content'>
                {posts.map((post) => (
                    <div key={post.id} className='card'>
                        <img src={post.image} alt={post.title} className='card-image' />
                        <div className='card-content'>
                            <h2 className='card-title'>{post.title}</h2>
                            <p className='card-text'>{post.content}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Portfolio;






// function Portfolio() {
//    const posts = [

//          { 
//             id: 1,
//             image:'/images/bulksms_rtqb7f.jpg',
//             title: 'PopSms - Bulk SMS',
//             content: 'Experience seamless communication with our bulk SMS and email service.',
//             },

//             { 
//                 id: 2,
//                 image: '/images/Mtumbler_gh88qs.png',
//                 title:'M-Tumbler',
//                 content: 'Instant Bonga Points to cash converter',
//             },
                
//             { 
//                     id: 3,
//                     image: '/images/nextauth_icotjb.webp',
//                     title:'NextAuth.js Documentation',
//                     content: 'Documentation on how to use NextAuth.js',
//             },

//             { 
//                         id: 4,
//                         image: '/images/dr_x4yqnh.avif',
//                         title:'Dr Floor',
//                         content: 'Site that allows you to view and purchase flooring materials',
//             },



       
//           ]

//           return(
//             <div className='post'>
//             {posts.map((post) => (
//               <div key={post.id} className='card'>
//                 <img src={post.image} alt={post.title} />
//                <div className='post-header'>
//                    <h2>{post.title}</h2>
//               <p>{post.content}</p>
//                </div>
//               </div>
//             ))}
//            </div>
//          )
       
//        }
//        export default Portfolio