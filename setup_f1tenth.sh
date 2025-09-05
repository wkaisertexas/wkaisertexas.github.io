#!/usr/bin/env bash
# Basic full ROS Melodic install (desktop-full) for Ubuntu 18.04 (bionic)

set -ex

cd

echo "Updating apt and installing prerequisites..."
sudo apt update
sudo apt install -y curl gnupg2 lsb-release build-essential

echo "Adding ROS repository..."
sudo sh -c 'echo "deb http://packages.ros.org/ros/ubuntu $(lsb_release -sc) main" > /etc/apt/sources.list.d/ros-latest.list'

echo "Adding ROS key..."
curl -s https://raw.githubusercontent.com/ros/rosdistro/master/ros.asc | sudo apt-key add -

echo "Updating apt indices..."
sudo apt update

echo "Installing ROS Melodic Desktop-Full..."
sudo apt install -y ros-melodic-desktop-full

echo "Configuring environment..."
echo "source /opt/ros/melodic/setup.bash" >> ~/.bashrc
source ~/.bashrc

echo "Installing build dependencies..."
sudo apt install -y python-rosdep python-rosinstall python-rosinstall-generator python-wstool

echo "Initializing rosdep..."
sudo apt install -y python-rosdep
sudo rosdep init || true
rosdep update

echo "============================================================"
echo "ROS Melodic installation complete!"
echo "Open a new terminal or run: source /opt/ros/melodic/setup.bash"
echo "============================================================"


# Installing the f1tenth repo
echo "============================================================"
echo "f1tenth things"
echo "============================================================"

source /opt/ros/melodic/setup.sh

mkdir -p ~/depend_ws

cd ~/depend_ws

sudo apt install -y git
git clone -b cartographer_changes https://github.com/linklab-uva/F1tenth_car_workspace.git

sudo apt install -y qt4-default ros-melodic-ackermann-msgs ros-melodic-serial ros-melodic-joy

