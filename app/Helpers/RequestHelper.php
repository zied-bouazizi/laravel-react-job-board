<?php

namespace App\Helpers;

class RequestHelper
{
    /**
     * Prefix all array keys with a string.
     *
     * @param array $array
     * @param string $prefix
     * @return array
     */
    public static function prefixArrayKeys(array $array, string $prefix): array
    {
        $result = [];
        foreach ($array as $key => $value) {
            $result["{$prefix}.{$key}"] = $value;
        }
        return $result;
    }
}
