$userAgent = "IndianArmedForcesPortal/1.0 (educational; contact@gov.in)"

$items = @(
    # Police
    @{ file = "Director-General_of_Police.svg"; dest = "public/police/dgp.svg" },
    @{ file = "Inspector-General_of_Police.svg"; dest = "public/police/igp.svg" },
    @{ file = "Deputy_Inspector-General_of_Police.svg"; dest = "public/police/dig.svg" },
    @{ file = "Senior_Superintendent_of_Police.svg"; dest = "public/police/ssp.svg" },
    @{ file = "Superintendent_of_Police.svg"; dest = "public/police/sp.svg" },
    @{ file = "AddlSP.svg"; dest = "public/police/addl_sp.svg" },
    @{ file = "Assistant_Superintendent_of_Police.svg"; dest = "public/police/asp.svg" },
    @{ file = "Inspector.svg"; dest = "public/police/inspector.svg" },
    @{ file = "Sub-Inspector.svg"; dest = "public/police/sub_inspector.svg" },
    @{ file = "Assistant_Sub-Inspector.svg"; dest = "public/police/asi.svg" },
    @{ file = "Police_Head_Constable.png"; dest = "public/police/head_constable.png" },
    @{ file = "Senior_Police_Constable.png"; dest = "public/police/senior_constable.png" },
    @{ file = "Indian_Police_Service_logo.png"; dest = "public/police/ips_logo.png" },
    @{ file = "Delhi_Police_Logo.png"; dest = "public/police/delhi_police.png" },

    # Coast Guard
    @{ file = "Indian_Coast_Guard_Logo.svg"; dest = "public/coastguard/icg_logo.svg" },
    @{ file = "Indian_Coast_Guard_OF-8_Shoulder.svg"; dest = "public/coastguard/dg_icg.svg" },
    @{ file = "Indian_Coast_Guard_OF-7_Shoulder.svg"; dest = "public/coastguard/ig_icg.svg" },
    @{ file = "Indian_Coast_Guard_OF-D.svg"; dest = "public/coastguard/cadet.svg" },
    @{ file = "Indian_Coast_Guard_OR-9.svg"; dest = "public/coastguard/pradhan_adhikari.svg" },
    @{ file = "Indian_Coast_Guard_OR-8.svg"; dest = "public/coastguard/uttam_adhikari.svg" },
    @{ file = "Indian_Coast_Guard_OR-6.svg"; dest = "public/coastguard/adhikari.svg" },
    @{ file = "Indian_Coast_Guard_OR-4.svg"; dest = "public/coastguard/uttam_navik.svg" },
    @{ file = "Indian_Coast_Guard_flag.svg"; dest = "public/coastguard/flag.svg" },

    # CAPF & Special Forces
    @{ file = "CAPF_Logo.png"; dest = "public/capf/capf_logo.png" },
    @{ file = "BSF_Flag.svg"; dest = "public/capf/bsf_flag.svg" },
    @{ file = "CISF_Flag.svg"; dest = "public/capf/cisf_flag.svg" },
    @{ file = "Flag_of_Central_Reserve_Police_Forces.png"; dest = "public/capf/crpf_flag.png" },
    @{ file = "ITBP_Flag.svg"; dest = "public/capf/itbp_flag.svg" },
    @{ file = "NSG_Flag.svg"; dest = "public/capf/nsg_flag.svg" },
    @{ file = "Sashastra_Seema_Bal_Flag.svg"; dest = "public/capf/ssb_flag.svg" },
    @{ file = "Assam_Rifles_Flag.svg"; dest = "public/capf/assam_rifles_flag.svg" },
    @{ file = "CAPF_Director-General.png"; dest = "public/capf/capf_dg.png" },
    @{ file = "CAPF_Inspector-General.png"; dest = "public/capf/capf_ig.png" },
    @{ file = "CAPF_Deputy_Inspector-General.png"; dest = "public/capf/capf_dig.png" },
    @{ file = "Central_Armed_Police_Forces_Subedar_Major.png"; dest = "public/capf/capf_subedar_major.png" },

    # CDS & Navy 2024 (Shivaji Maharaj Rajmudra)
    @{ file = "Seal_of_CDS,_India.svg"; dest = "public/assets/cds_seal.svg" },
    @{ file = "Rank_insignia_for_India_CDS.svg"; dest = "public/assets/cds_rank.svg" },
    @{ file = "Naval_Ensign_of_India.svg"; dest = "public/navy_new/naval_ensign.svg" },
    @{ file = "14-Indian_Navy-ADM.svg"; dest = "public/navy_new/admiral.svg" },
    @{ file = "13-Indian_Navy-VADM.svg"; dest = "public/navy_new/vice_admiral.svg" },
    @{ file = "12-Indian_Navy-RADM.svg"; dest = "public/navy_new/rear_admiral.svg" },
    @{ file = "11-Indian_Navy-CDRE.svg"; dest = "public/navy_new/commodore.svg" },
    @{ file = "10-Indian_Navy-CAPT.svg"; dest = "public/navy_new/captain.svg" },
    @{ file = "09-Indian_Navy-CDR.svg"; dest = "public/navy_new/commander.svg" },
    @{ file = "08-Indian_Navy-LCDR.svg"; dest = "public/navy_new/lt_commander.svg" },
    @{ file = "07-Indian_Navy-LT.svg"; dest = "public/navy_new/lieutenant.svg" },
    @{ file = "06-Indian_Navy-SLT.svg"; dest = "public/navy_new/sub_lieutenant.svg" },
    @{ file = "India-Navy-OR-9.svg"; dest = "public/navy_new/mcpo1.svg" },
    @{ file = "India-Navy-OR-8.svg"; dest = "public/navy_new/mcpo2.svg" },
    @{ file = "India-Navy-OR-7.svg"; dest = "public/navy_new/cpo.svg" },
    @{ file = "PO_Indian_Navy.svg"; dest = "public/navy_new/po.svg" },
    @{ file = "Leading_Seaman_Indian_Navy.svg"; dest = "public/navy_new/leading_seaman.svg" },
    @{ file = "Marcos_insignia.png"; dest = "public/badges/marcos.png" },

    # IAF 2023 Ensign & Modern SVGs
    @{ file = "Air_Force_Ensign_of_India_(2023).svg"; dest = "public/airforce_new/iaf_ensign.svg" },
    @{ file = "Indian_IAF_OF-10.svg"; dest = "public/airforce_new/marshal.svg" },
    @{ file = "Indian_IAF_OF-9.svg"; dest = "public/airforce_new/air_chief_marshal.svg" },
    @{ file = "Indian_IAF_OF-8.svg"; dest = "public/airforce_new/air_marshal.svg" },
    @{ file = "Indian_IAF_OF-7.svg"; dest = "public/airforce_new/air_vice_marshal.svg" },
    @{ file = "Indian_IAF_OF-6.svg"; dest = "public/airforce_new/air_commodore.svg" },
    @{ file = "Indian_IAF_OF-5.svg"; dest = "public/airforce_new/group_captain.svg" },
    @{ file = "Indian_IAF_OF-4.svg"; dest = "public/airforce_new/wing_commander.svg" },
    @{ file = "Indian_IAF_OF-3.svg"; dest = "public/airforce_new/squadron_leader.svg" },
    @{ file = "Indian_IAF_OF-2.svg"; dest = "public/airforce_new/flight_lieutenant.svg" },
    @{ file = "Indian_IAF_OF-1b.svg"; dest = "public/airforce_new/flying_officer.svg" },
    @{ file = "Indian_IAF_OR-9.svg"; dest = "public/airforce_new/mwo.svg" },
    @{ file = "Indian_IAF_OR-8.svg"; dest = "public/airforce_new/wo.svg" },
    @{ file = "Indian_IAF_OR-7.svg"; dest = "public/airforce_new/jwo.svg" },
    @{ file = "India-AirForce-OR-6.svg"; dest = "public/airforce_new/sergeant.svg" },
    @{ file = "India-AirForce-OR-4.svg"; dest = "public/airforce_new/corporal.svg" },
    @{ file = "India-AirForce-OR-2.svg"; dest = "public/airforce_new/leading_aircraftman.svg" },
    @{ file = "IAF_Pilot_bagde.png"; dest = "public/badges/iaf_pilot.png" },
    @{ file = "Special_forces.png"; dest = "public/badges/garud.png" },

    # Army SVGs
    @{ file = "Field_Marshal_of_the_Indian_Army.svg"; dest = "public/army_new/field_marshal.svg" },
    @{ file = "General_of_the_Indian_Army.svg"; dest = "public/army_new/general.svg" },
    @{ file = "Lieutenant_General_of_the_Indian_Army.svg"; dest = "public/army_new/lt_general.svg" },
    @{ file = "Major_General_of_the_Indian_Army.svg"; dest = "public/army_new/maj_general.svg" },
    @{ file = "Brigadier_of_the_Indian_Army.svg"; dest = "public/army_new/brigadier.svg" },
    @{ file = "Colonel_of_the_Indian_Army.svg"; dest = "public/army_new/colonel.svg" },
    @{ file = "Lieutenant_Colonel_of_the_Indian_Army.svg"; dest = "public/army_new/lt_colonel.svg" },
    @{ file = "Major_of_the_Indian_Army.svg"; dest = "public/army_new/major.svg" },
    @{ file = "Captain_of_the_Indian_Army.svg"; dest = "public/army_new/captain.svg" },
    @{ file = "Lieutenant_of_the_Indian_Army.svg"; dest = "public/army_new/lieutenant.svg" },
    @{ file = "Subedar_Major_-_Risaldar_Major_of_the_Indian_Army.svg"; dest = "public/army_new/subedar_major.svg" },
    @{ file = "Subedar_-_Risaldar_of_the_Indian_Army.svg"; dest = "public/army_new/subedar.svg" },
    @{ file = "Naib_Subedar_-_Naib_Risaldar_of_the_Indian_Army.svg"; dest = "public/army_new/naib_subedar.svg" },
    @{ file = "India-Army-OR-6.svg"; dest = "public/army_new/havildar.svg" },
    @{ file = "India-Army-OR-4.svg"; dest = "public/army_new/naik.svg" },
    @{ file = "India-Army-OR-3.svg"; dest = "public/army_new/lance_naik.svg" }
)

Write-Host "Total items to process: $($items.Count)"
$success = 0

foreach ($item in $items) {
    $fileName = $item.file
    $dest = $item.dest
    
    if (Test-Path $dest) {
        Write-Host "Exists: $dest"
        $success++
        continue
    }

    try {
        # Check Commons first
        $apiUrl = "https://commons.wikimedia.org/w/api.php?action=query&titles=File:$([Uri]::EscapeDataString($fileName))&prop=imageinfo&iiprop=url&format=json"
        $res = Invoke-RestMethod -Uri $apiUrl -UserAgent $userAgent -TimeoutSec 10
        $props = $res.query.pages.PSObject.Properties.Value
        $url = $null
        if ($props.imageinfo) {
            $url = $props.imageinfo[0].url
        }

        # Fallback to en.wikipedia
        if (-not $url) {
            $apiUrl2 = "https://en.wikipedia.org/w/api.php?action=query&titles=File:$([Uri]::EscapeDataString($fileName))&prop=imageinfo&iiprop=url&format=json"
            $res2 = Invoke-RestMethod -Uri $apiUrl2 -UserAgent $userAgent -TimeoutSec 10
            $props2 = $res2.query.pages.PSObject.Properties.Value
            if ($props2.imageinfo) {
                $url = $props2.imageinfo[0].url
            }
        }

        if ($url) {
            Invoke-WebRequest -Uri $url -OutFile $dest -UserAgent $userAgent -TimeoutSec 15
            Write-Host "Downloaded: $fileName -> $dest"
            $success++
        } else {
            Write-Warning "Could not find URL for: $fileName"
        }
    } catch {
        Write-Warning "Error processing $fileName : $_"
    }

    Start-Sleep -Milliseconds 150
}

Write-Host "Finished! Successfully downloaded $success / $($items.Count)"
