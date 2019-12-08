# Copy this text into your `.bash` homework file. Copy and paste the code you successfully used into terminal below each prompt

# Open the **Terminal app**
Command + Space > type "Terminal"
# Create a new directory on your desktop called `galaxy_far_far_away`and enter it
cd ~ > cd desktop > mkdir galaxy_far_far_away > cd galaxy_far_far_away
# Create a directory called `death_star`
mkdir death_star
# and make the following files inside of it:
cd death_star
touch darth_vader.txt princess_leia.txt storm_trooper.txt
# darth_vader.txt
# princess_leia.txt
# storm_trooper.txt

# In `galaxy_far_far_away`, make a directory named `tatooine`
cd ..
mkdir tatoonie
# and create the following files in it:
touch luke.txt ben_kenobi.txt
# luke.txt
# ben_kenobi.txt

# Inside of `tatooine` make a directory called `millenium_falcon`
cd tatoonie
mkdir millenium_falcon
# and in it create:
cd millenium_falcon
touch han_solo.txt chewbaca.txt
# han_solo.txt
# chewbaca.txt

# Rename `ben_kenobi.txt` to `obi_wan.txt
cd.. 
cd ..
mv ben_kenobi.txt obi_wan.txt

# Copy `storm_trooper.txt` from `death_star` to `tatooine`
cd death_star > pwd
cp /Users/andrei/desktop/galaxy_far_far_away/death_star/storm_trooper.txt /Users/andrei/desktop/galaxy_far_far_away/tatoonie

# Move `luke.txt` and `obi_wan.txt` to the `millenium_falcon`
cd ..
ls
mv luke.txt obi_wan.txt tatoonie/millenium_falcon/

# Move `millenium_falcon` out of `tatooine` and into `galaxy_far_far_away`
pwd
mv tatoonie/millenium_falcon/ ./

# Move `millenium_falcon` into `death_star`
cd death_star
mv /Users/andrei/desktop/galaxy_far_far_away/millenium_falcon ./

# Move `princess_leia.txt` into the `millenium_falcon`
pwd 
ls
mv princess_leia.txt millenium_falcon/

# Delete `obi_wan.txt`
cd millenium_falcon
ls
rm obi_wan.txt

# In `galaxy_far_far_away`, make a directory called `yavin_4`
cd ..
pwd
cd ..
pwd
mkdir yavin_4

# Move the `millenium_falcon` out of the `death_star` and into `yavin_4`
cd yavin_4/
pwd
mv /Users/andrei/desktop/galaxy_far_far_away/death_star/millenium_falcon/ ./

# Make a directory in `yavin_4` called `x_wing`
mkdir x_wing

# Move `princess_leia.txt` to `yavin_4` and `luke.txt` to `x_wing`
cd millenium_falcon
ls
pwd
mv princess_leia.txt /Users/andrei/desktop/galaxy_far_far_away/yavin_4/
mv luke.txt /Users/andrei/desktop/galaxy_far_far_away/yavin_4/x_wing/

# Move the `millenium_falcon` and `x_wing` out of `yavin_4` and into `galaxy_far_far_away`
cd ..
ls
mv millenium_falcon/ x_wing/ ..

# In `death_star`, create directories for `tie_fighter_1`, `tie_fighter_2` and `tie_fighter_3`
cd ..
cd death_star
mkdir tie_fighter_1 tie_fighter_2 tie_fighter_3

# Move `darth_vader.txt` into `tie_fighter_1`
ls
mv darth_vader.txt tie_fighter_1/

# Make a copy of `storm_trooper.txt` in both `tie_fighter_2` and `tie_fighter_3`
cp storm_trooper.txt tie_fighter_2
cp storm_trooper.txt tie_fighter_3

# Move all of the `tie_fighters` out of the `death_star` and into `galaxy_far_far_away`
mv tie_fighter_1 tie_fighter_2 tie_fighter_3 ..

# Be careful with this command - cannot undo!

# Make sure you delete the right thing, or you could accidentally delete the contents of your computer (it has happened).

# This command will typically not ask you if you really want to delete. It will just delete so doublecheck you are deleting exactly what you mean to delete

# Remove `tie_fighters` 2 and 3.
cd ..
pwd
ls
rm -R tie_fighter_1 tie_fighter_2 tie_fighter_3

# Touch a file in "**x_wing**" called "**the_force.txt**".
ls
cd x_wing
touch the_force.txt

# Destroy the "**death_star**" and anyone inside of it.
cd ..
rm -R death_star/
# Return "**x_wing**" and the "**millenium_falcon**" to "**yavin_4**".
mv x_wing/ millenium_falcon/ yavin_4/
# Celebrate!