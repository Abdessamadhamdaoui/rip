 
 

export const skillsImage = (skill) => {
    const skillID = skill.toLowerCase();
    switch (skillID) {
        case 'html':
                return 'https://dev-portfolio-template.netlify.app/static/media/html.6a342d61.svg';
        case  'css':
                 return 'https://dev-portfolio-template.netlify.app/static/media/css.43b6f4bd.svg';
        case 'javascript':
                  return  'https://dev-portfolio-template.netlify.app/static/media/javascript.e9360603.svg';
        case 'react':
                   return 'https://dev-portfolio-template.netlify.app/static/media/react.2b6a0717.svg';
        case 'bootstrap':
                    return  "https://th.bing.com/th/id/OIP.mNLHMt-PM0iPB52LqWOBAgHaHd?w=172&h=180&c=7&r=0&o=5&pid=1.7";
        case 'mongodb':
             return  'https://th.bing.com/th/id/OIP.4y0O4Ytk5MArYDVEKMahLQHaHa?w=182&h=181&c=7&r=0&o=5&pid=1.7';
        case 'tailwind':
                    return  'https://th.bing.com/th?id=OIP.W_Louhgy0qKrsRO8YfURpQHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2';
        case 'mysql':
                     return 'mysql';
         case 'postgresql':
                     return 'postgresql';
          case 'next.js':
                      return  'https://th.bing.com/th/id/OIP.htbUdWgFQ3a94PMEvBr_hQHaEO?w=297&h=180&c=7&r=0&o=5&pid=1.7';
        case 'node.js':
            return 'data:image/jpeg;base64,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';
        }
}
 