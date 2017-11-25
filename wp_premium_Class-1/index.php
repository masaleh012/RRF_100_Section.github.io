<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">

        <title>Class-1</title>



        
    </head>
    <body>
        
        <?php 
            $beautifull='Rajshahi';

            $cities=array('Dhaka', 'Rajshahi', 'Khulna', 'Chittagong');
        ?>

        <?php 
            if ($beautifull=='Rajshahi') : ?>
            <h1>Most beautifull city is Rajshahi</h1>
        <?php else : ?>
        <h1>We don't know</h1>
        <?php endif; ?>
            
        <?php
            if ($beautifull=='Rajshahi') {
                echo '<h1>Most beautifull city is '.$beautifull.';</h1>'
            } else {
                echo '<h1>We don\'t know</h1>';
            }
        
        ?>

    </body>
</html>
