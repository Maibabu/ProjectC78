var images = ["https://i.postimg.cc/MGn9GJXw/family.jpg","https://i.postimg.cc/qqyYvVbq/grandpa.jpg", "https://i.postimg.cc/wjMnFtMX/father.jpg" , "https://i.postimg.cc/5ymDKL83/bro.jpg", "https://i.postimg.cc/JnL6wtrd/sister.jpg", "https://i.postimg.cc/bw5W5zSK/mother.jpg"];
var names = ["Fmaily Book","Ranbir Singh", "Diljeet Singh", "Rocky Singh", "Alia Singh", "Soni Singh"];
var i = 0;
function update()
{
    i++;
    var numbers_of_family_member_in_array = 5
    if(i > numbers_of_family_member_in_array)
      {
          i = 0;
      }
    
    //Debug the code to store list of images in updatedImage. Use images[i]
    var updatedImage = [images];
    
  
    //Debug the code to store list of names in updatedName. Use names[i]
    var updatedName = [names] ;
    <h2>
                My Mom is always pretty and she likes to do make up. I like to cook with my mom
                and she loves to paint. My Dad is really kind and even caring,helpful.
                My dad once helped me when I was doing my homework, he explained very well that I could understand.
                My brother is very kind and also helpful like my dad, but my brother likes to have a good time with each other.
                He is my best brother ever! last but not least me, I am the sister and I like to draw and ride my bike in the summer.
                I like to spend time with my family and my friends. This is all about my family.
            </h2>
  
    

    
    
  
 
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}
