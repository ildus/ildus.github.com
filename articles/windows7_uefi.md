PART 1 - Preparation
----------------------

1. Attach a USB HDD / SSD to your computer. Open Computer Management and then open Disk Management.

2. Initialize / format your attached USB drive as a GPT Disk (NOT MBR Disk).

3. Remove and set aside.

4. Attach a USB thumb drive (or HDD is fine) with at least 4GB capacity. Format in FAT32. Even if you are using an HDD, make the partition between 4-10GB and format in FAT32. ** you can format in NTFS, but you may need to set the partition as active. Just avoid the potential issue and format in FAT32.

5. Move Windows 7 install files onto the USB thumb drive or HDD partition.

6. Follow instructions in PART II if you are booting from USB Flash Drive, thumb drive, HDD partition. If you are using a USB optical drive, you can skip PART II.

PART II – Setup the Windows 7 x64 Install Partition on a USB Flash Drive or USB HDD

1.  Copy the contents of your Windows 7 x64 install DVD to your USB flash drive or USB HDD.

2.  Find the file bootmgfw.efi and put it on your desktop.

a. If you are using Windows 7 x64 already, then this is easy. Go to C:\Windows\Boot\EFI and the file is in there.
b. If you are not using Windows 7 x64, then go to your Flash Drive and look in the sources directory. Find the file called install.wim using 7-Zip. Inside, there are FOUR folders numbered 1, 2, 3 and 4. Go in folder 1 and get the file there.

3. Rename bootmgfw.efi to bootx64.efi

4. Go back into your Flash Drive. Look in the directory efi\microsoft and you will see a folder called boot

5. Copy the folder called boot and put it into the folder efi\microsoft

6.  Copy the folder boot and place it one level up.
If T:\ is your Flash Drive, it should look like this when you are done -> T:\efi\boot

7. Take your renamed file bootx64.efi and place it within this folder T:\efi\boot

8. Now, your Win 7 partition is ready to boot in EFI.

PART III – Change BIOS settings

1. Setup your BIOS to boot UEFI only.

2. Set the boot order for the USB Flash Drive (or optical drive) to be first.